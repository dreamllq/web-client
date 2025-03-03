
export default [
  {
    'key': 'welcome',
    'label': '首页',
    'icon': 'House',
    'children': null
  },
  {
    'key': 'SYS',
    'label': '系统管理',
    'icon': 'Setting',
    'children': [
      {
        'key': 'sys-role',
        'label': '角色维护',
        'permission': 'roles_read'
      },
      {
        'key': 'sys-users',
        'label': '用户管理',
        'permission': 'users_read'
      },
      {
        'key': 'sys-resources',
        'label': '资源管理',
        'permission': 'resources_read'
      },
      {
        'key': 'sys-setting',
        'label': '系统设置'
      }
    ]
  },
  {
    key: 'fs',
    label: 'FS',
    icon: 'FolderOpened'
  },
  {
    key: 'bi',
    label: 'BI',
    icon: 'Setting',
    children: [
      {
        'key': 'bi-data',
        'label': '数据管理'
      },
      {
        'key': 'bi-chart',
        'label': '图表管理'
      },
      {
        'key': 'bi-view',
        'label': '视图管理'
      }
    ]
  },
  {
    'key': 'weixin',
    'label': '微信运营',
    'icon': 'ChatDotRound',
    'children': [
      {
        'key': 'weixin-management-center',
        'label': '管理中心'
      },
      {
        'key': 'weixin-pay',
        'label': '支付管理'
      },
      {
        'key': 'official-account-management-info',
        'label': '公众号管理',
        'subPages': [
          'official-account-management-info',
          'official-account-management-template',
          'official-account-management-users'
        ]
      },
      {
        'key': 'mini-program-management-info',
        'label': '小程序管理',
        'subPages': ['mini-program-management-info', 'mini-program-management-users']
      }
    ]
  },
  {
    'key': 'mall',
    'label': '商城运营',
    'icon': 'Shop',
    'children': [
      {
        'key': 'mall-home',
        'label': '首页管理'
      },
      {
        'key': 'mall-good-group',
        'label': '商品分组管理'
      },
      {
        'key': 'mall-shop',
        'label': '店铺管理'
      },
      {
        'key': 'mall-good',
        'label': '商品管理'
      }
    ]
  },
  {
    'key': 'forum',
    'label': '论坛管理',
    'icon': 'ChatDotRound',
    'children': [
      {
        'key': 'forum-section',
        'label': '板块管理'
      },
      {
        'key': 'forum-post',
        'label': '帖子管理'
      }
    ]
  },
  {
    'key': 'chat',
    'label': '即时通讯',
    'icon': 'ChatRound',
    'children': [
      {
        'key': 'chat-client',
        'label': '客户端'
      }
    ]
  },
  {
    'key': 'ai',
    'label': 'AI',
    'icon': 'ChatRound',
    'children': [
      {
        'key': 'ai-service-type',
        'label': '服务类型'
      },
      {
        'key': 'ai-baidu',
        'label': '百度'
      },
      {
        'key': 'ai-aliyun',
        'label': '阿里云'
      }
    ]
  }
];
