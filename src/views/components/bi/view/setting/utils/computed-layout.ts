import { GridLayout } from '../type';


function calculateLayout(blocks, gridColumns = 12) {
  const sortedBlocks = sortBlocksByPriority(blocks);
  const existingBlocks = [];
  const result = [];

  for (const block of sortedBlocks) {
    let newX = block.x;
    let newY = block.y;

    if (block.static) {
      existingBlocks.push({ ...block });
      result.push({ ...block });
      continue;
    }

    if (block.dragging) {
      const newPosition = findNewPosition(block, existingBlocks);
      newX = newPosition.x;
      newY = newPosition.y;
    } else {
      const newPosition = findPositionForOtherBlock(block, existingBlocks);
      newX = newPosition.x;
      newY = newPosition.y;
    }

    const newBlock = {
      ...block,
      x: newX,
      y: newY 
    };
    existingBlocks.push(newBlock);
    result.push(newBlock);
  }

  return result;
}

function sortBlocksByPriority(blocks) {
  return [...blocks].sort((a, b) => {
    if (a.static && !b.static) return -1;
    if (!a.static && b.static) return 1;
    if (a.dragging && !b.dragging) return -1;
    if (!a.dragging && b.dragging) return 1;
    return 0;
  });
}

function isPositionValid(candidate, existingBlocks) {
  for (const block of existingBlocks) {
    const cX1 = candidate.x;
    const cX2 = candidate.x + candidate.w - 1;
    const cY1 = candidate.y;
    const cY2 = candidate.y + candidate.h - 1;
    const bX1 = block.x;
    const bX2 = block.x + block.w - 1;
    const bY1 = block.y;
    const bY2 = block.y + block.h - 1;
    if (cX1 <= bX2 && cX2 >= bX1 && cY1 <= bY2 && cY2 >= bY1) {
      return false;
    }
  }
  return true;
}

function findNewPosition(block, existingBlocks) {
  if (isPositionValid(block, existingBlocks)) {
    return {
      x: block.x,
      y: block.y 
    };
  }

  let maxRight = 0;
  for (const existing of existingBlocks) {
    if (existing.y <= block.y + block.h - 1 && existing.y + existing.h - 1 >= block.y) {
      const endX = existing.x + existing.w;
      if (endX > maxRight) {
        maxRight = endX;
      }
    }
  }

  const newX = maxRight;
  if (newX + block.w <= 12) {
    const tempBlock = {
      x: newX,
      y: block.y,
      w: block.w,
      h: block.h 
    };
    if (isPositionValid(tempBlock, existingBlocks)) {
      return {
        x: newX,
        y: block.y 
      };
    }
  }

  let newY = block.y + 1;
  while (true) {
    const possibleX = findAvailableXInRow(newY, block.w, block.h, existingBlocks);
    if (possibleX !== null) {
      const candidate = {
        x: possibleX,
        y: newY,
        w: block.w,
        h: block.h 
      };
      if (isPositionValid(candidate, existingBlocks)) {
        return candidate;
      }
    }
    newY++;
  }
}

function findAvailableXInRow(y, w, h, existingBlocks) {
  let x = 0;
  while (x <= 12 - w) {
    const candidateBlock = {
      x,
      y,
      w,
      h 
    };
    if (isPositionValid(candidateBlock, existingBlocks)) {
      return x;
    }
    x++;
  }
  return null;
}

function findPositionForOtherBlock(block, existingBlocks) {
  if (isPositionValid(block, existingBlocks)) {
    return {
      x: block.x,
      y: block.y 
    };
  }

  let bestY = null;
  let bestX = null;
  for (let y = 0; y < 1000; y++) {
    const possibleX = findAvailableXInRow(y, block.w, block.h, existingBlocks);
    if (possibleX !== null) {
      const candidate = {
        x: possibleX,
        y,
        w: block.w,
        h: block.h 
      };
      if (isPositionValid(candidate, existingBlocks)) {
        if (bestY === null || y < bestY) {
          bestY = y;
          bestX = possibleX;
        }
      }
    }
  }

  if (bestY !== null) {
    return {
      x: bestX,
      y: bestY 
    };
  }

  return {
    x: 0,
    y: existingBlocks.length 
  };
}

export const computedLayout = calculateLayout;

// 使用js 开发一个布局计算算法，基于栅格布局系统，入参定义块集合信息，块结构：x是位置列，y是位置行，w是占用的列数，h是占用的行数，static表示该块位置不会变化， dragging表示拖动。还有一个参数是 珊格数。返回按横向再纵向排序后的块集合，。珊格布局有12列，行无限。初始化包含位置信息，如果不重叠则不修改现有位置，将重叠的块摆放当新位置。优先布局static，然后布局dragging，再布局其他块。如果dragging块布局时与static块重叠，将dragging块摆放在static块后面或下一行，且不能超过珊格范围。其他块布局优先横向摆放，块不能重叠。