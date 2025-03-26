export default {
  ModelSwitch: {
    title: '模型',
  },
  agentDefaultMessage:
    '你好，我是 **{{name}}**，你可以立即与我开始对话，也可以前往 [助手设置]({{url}}) 完善我的信息。',
  agentDefaultMessageWithSystemRole: '你好，我是 **{{name}}**，{{systemRole}}，让我们开始对话吧！',
  agentDefaultMessageWithoutEdit: '你好，我是 **{{name}}**，让我们开始对话吧！',
  agents: '助手',
  artifact: {
    generating: '生成中',
    inThread: '子话题中无法查看，请切换到主对话区打开',
    thinking: '思考中',
    thought: '思考过程',
    unknownTitle: '未命名作品',
  },
  backToBottom: '跳转至当前',
  chatList: {
    longMessageDetail: '查看详情',
  },
  clearCurrentMessages: '清空当前会话消息',
  confirmClearCurrentMessages: '即将清空当前会话消息，清空后将无法找回，请确认你的操作',
  confirmRemoveSessionItemAlert: '即将删除该助手，删除后该将无法找回，请确认你的操作',
  confirmRemoveSessionSuccess: '助手删除成功',
  defaultAgent: '自定义助手',
  defaultList: '默认列表',
  defaultSession: '自定义助手',
  duplicateSession: {
    loading: '复制中...',
    success: '复制成功',
    title: '{{title}} 副本',
  },
  duplicateTitle: '{{title}} 副本',
  emptyAgent: '暂无助手',
  extendParams: {
    disableContextCaching: {
      desc: '单条对话生成成本最高可降低 90%，响应速度提升 4 倍（<1>了解更多</1>）。开启后将自动禁用历史消息数限制',
      title: '开启上下文缓存',
    },
    enableReasoning: {
      desc: '基于 Claude Thinking 机制限制（<1>了解更多</1>），开启后将自动禁用历史消息数限制',
      title: '开启深度思考',
    },
    reasoningBudgetToken: {
      title: '思考消耗 Token',
    },
    title: '模型扩展功能',
  },
  history: {
    title: '助手将只记住最后{{count}}条消息',
  },
  historyRange: '历史范围',
  historySummary: '历史消息总结',
  inbox: {
    desc: '开启大脑集群，激发思维火花。你的智能助理，在这里与你交流一切',
    title: '随便聊聊',
  },
  input: {
    addAi: '添加一条 AI 消息',
    addUser: '添加一条用户消息',
    more: '更多',
    send: '发送',
    sendWithCmdEnter: '按 {{meta}} + Enter 键发送',
    sendWithEnter: '按 Enter 键发送',
    stop: '停止',
    warp: '换行',
  },
  intentUnderstanding: {
    title: '正在理解并分析您的意图...',
  },
  knowledgeBase: {
    all: '所有内容',
    allFiles: '所有文件',
    allKnowledgeBases: '所有知识库',
    disabled:
      '当前部署模式不支持知识库对话，如需使用，请切换到服务端数据库部署或使用 {{cloud}} 服务',
    library: {
      action: {
        add: '添加',
        detail: '详情',
        remove: '移除',
      },
      title: '文件/知识库',
    },
    relativeFilesOrKnowledgeBases: '关联文件/知识库',
    title: '知识库',
    uploadGuide: '上传过的文件可以在「知识库」中查看哦',
    viewMore: '查看更多',
  },
  messageAction: {
    delAndRegenerate: '删除并重新生成',
    deleteDisabledByThreads: '存在子话题，不能删除',
    regenerate: '重新生成',
  },
  messages: {
    modelCard: {
      credit: '积分',
      creditPricing: '定价',
      creditTooltip:
        '为便于计数，我们将 1$ 折算为 1M 积分，例如 $3/M tokens 即可折算为 3积分/token',
      pricing: {
        inputCachedTokens: '缓存输入 {{amount}}/积分 · ${{amount}}/M',
        inputCharts: '${{amount}}/M 字符',
        inputMinutes: '${{amount}}/分钟',
        inputTokens: '输入 {{amount}}/积分 · ${{amount}}/M',
        outputTokens: '输出 {{amount}}/积分 · ${{amount}}/M',
<<<<<<< HEAD
      },
    },
    tokenDetails: {
      input: '输入',
      inputAudio: '音频输入',
      inputCached: '输入缓存',
      inputText: '文本输入',
      inputTitle: '输入明细',
      inputUncached: '输入未缓存',
=======
        writeCacheInputTokens: '缓存输入写入 {{amount}}/积分 · ${{amount}}/M',
      },
    },
    tokenDetails: {
      average: '平均单价',
      input: '输入',
      inputAudio: '音频输入',
      inputCached: '输入缓存',
      inputCitation: '引用输入',
      inputText: '文本输入',
      inputTitle: '输入明细',
      inputUncached: '输入未缓存',
      inputWriteCached: '输入缓存写入',
>>>>>>> origin/main
      output: '输出',
      outputAudio: '音频输出',
      outputText: '文本输出',
      outputTitle: '输出明细',
      reasoning: '深度思考',
      title: '生成明细',
      total: '总计消耗',
    },
  },
  newAgent: '新建助手',
  pin: '置顶',
  pinOff: '取消置顶',
  rag: {
    referenceChunks: '引用源',
    userQuery: {
      actions: {
        delete: '删除 Query 重写',
        regenerate: '重新生成 Query',
      },
    },
  },
  regenerate: '重新生成',
  roleAndArchive: '角色与记录',
  search: {
    grounding: {
      searchQueries: '搜索关键词',
      title: '已搜索到 {{count}} 个结果',
    },
    mode: {
      auto: {
        desc: '根据对话内容智能判断是否需要搜索',
        title: '智能联网',
      },
      off: {
        desc: '仅使用模型的基础知识，不进行网络搜索',
        title: '关闭联网',
      },
      on: {
        desc: '持续进行网络搜索，获取最新信息',
        title: '始终联网',
      },
      useModelBuiltin: '使用模型内置搜索引擎',
    },
    searchModel: {
      desc: '当前模型不支持函数调用，因此需要搭配支持函数调用的模型才能联网搜索',
      title: '搜索辅助模型',
    },
    title: '联网搜索',
  },
  searchAgentPlaceholder: '搜索助手...',
  sendPlaceholder: '输入聊天内容...',
  sessionGroup: {
    config: '分组管理',
    confirmRemoveGroupAlert: '即将删除该分组，删除后该分组的助手将移动到默认列表，请确认你的操作',
    createAgentSuccess: '助手创建成功',
    createGroup: '添加新分组',
    createSuccess: '分组创建成功',
    creatingAgent: '助手创建中...',
    inputPlaceholder: '请输入分组名称...',
    moveGroup: '移动到分组',
    newGroup: '新分组',
    rename: '重命名分组',
    renameSuccess: '重命名成功',
    sortSuccess: '重新排序成功',
    sorting: '分组排序更新中...',
    tooLong: '分组名称长度需在 1-20 之内',
  },
  shareModal: {
    copy: '复制',
    download: '下载截图',
    downloadFile: '下载文件',
    exportTitle: '默认标题',
    imageType: '图片格式',
    includeTool: '包含插件消息',
    includeUser: '包含用户消息',
    screenshot: '截图',
    settings: '导出设置',
    text: '文本',
    withBackground: '包含背景图片',
    withFooter: '包含页脚',
    withPluginInfo: '包含插件信息',
    withRole: '包含消息角色',
    withSystemRole: '包含助手角色设定',
  },
  stt: {
    action: '语音输入',
    loading: '识别中...',
    prettifying: '润色中...',
  },
  thread: {
    divider: '子话题',
    threadMessageCount: '{{messageCount}} 条消息',
    title: '子话题',
  },
  tokenDetails: {
    chats: '会话消息',
    historySummary: '历史总结',
    rest: '剩余可用',
    systemRole: '角色设定',
    title: '上下文明细',
    tools: '插件设定',
    total: '总共可用',
    used: '总计使用',
  },
  tokenTag: {
    overload: '超过限制',
    remained: '剩余',
    used: '使用',
  },
  topic: {
    checkOpenNewTopic: '是否开启新话题?',
    checkSaveCurrentMessages: '是否保存当前会话为话题?',
    openNewTopic: '开启新话题',
    saveCurrentMessages: '将当前会话保存为话题',
  },
  translate: {
    action: '翻译',
    clear: '删除翻译',
  },
  tts: {
    action: '语音朗读',
    clear: '删除语音',
  },
  updateAgent: '更新助理信息',
  upload: {
    action: {
      fileUpload: '上传文件',
      folderUpload: '上传文件夹',
      imageDisabled: '当前模型不支持视觉识别，请切换模型后使用',
      imageUpload: '上传图片',
      tooltip: '上传',
    },
    clientMode: {
      actionFiletip: '上传文件',
      actionTooltip: '上传',
      disabled: '当前模型不支持视觉识别和文件分析，请切换模型后使用',
    },
    preview: {
      prepareTasks: '准备分块...',
      status: {
        pending: '准备上传...',
        processing: '文件处理中...',
      },
    },
  },
  zenMode: '专注模式',
};
