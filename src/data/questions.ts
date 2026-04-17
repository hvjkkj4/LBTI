import type { LbtiTypeCode } from "./types";

export interface LbtiQuestionOption {
  label: string;
  // Points awarded to each type code for this option.
  vote: Partial<Record<LbtiTypeCode, number>>;
}

export interface LbtiQuestion {
  title: string;
  sub?: string;
  options: LbtiQuestionOption[];
}

export const QUESTIONS: LbtiQuestion[] = [
  {
    title: "周五下班，群里突然弹出夜宵局，你第一反应是：",
    sub: "别装，选你平时最像的反应？",
    options: [
      {
        label: "先看阵容，不对味就“我先撤了哈”。",
        vote: { SOLOX: 3, COOL: 1 },
      },
      {
        label: "去，但只待黄金 90 分钟，主打一个可进可退。",
        vote: { COOL: 3, AUTHX: 1 },
      },
      {
        label: "去！而且会很在意大家有没有接住我。",
        vote: { CLINGY: 3, FOMAX: 1 },
      },
    ],
  },
  {
    title: "你发了条朋友圈，半天没人点赞，你会：",
    sub: "这种时候，你一般怎么给自己找台阶？",
    options: [
      { label: "直接关提醒：眼不见心不烦。", vote: { SOLOX: 3, RIGOR: 1 } },
      {
        label: "找个关系好的朋友唠一句，确认不是我想多。",
        vote: { CLINGY: 2, AUTHX: 2 },
      },
      {
        label: "告诉自己“这条就是发给未来的我”，然后该干嘛干嘛。",
        vote: { COOL: 2, RIGOR: 2, LAZIQ: 1 },
      },
    ],
  },
  {
    title: "DDL 只剩 3 小时，你现在 CPU 冒烟，第一步会？",
    sub: "已经冒烟了，先干哪一步？",
    options: [
      {
        label: "先发个“我裂开了”表情包，降温后再动。",
        vote: { XSWL: 3, ZENIT: 1 },
      },
      { label: "先列最小交付，直接硬推主线。", vote: { INWVL: 3, RIGOR: 1 } },
      {
        label: "先缓 10 分钟，等脑子回线再开工。",
        vote: { PROCRS: 3, MOYU: 1 },
      },
    ],
  },
  {
    title: "凌晨突然 emo，你更常见的处理方式是：",
    sub: "半夜突然破防，你通常怎么收拾自己？",
    options: [
      {
        label: "脑内复盘三百遍，最后记一条“下次别这样”。",
        vote: { RERUN: 3, ZENIT: 1 },
      },
      {
        label: "先洗澡/听歌/睡觉，明天再说，先保电量。",
        vote: { LAZIQ: 3, MOYU: 1 },
      },
      {
        label: "做个小动作立刻切状态，比如收桌子 5 分钟。",
        vote: { ZENIT: 3, COOL: 1 },
      },
    ],
  },
  {
    title: "老板周日发“在吗”，你会怎么回：",
    sub: "这种消息一来，你一般怎么接？",
    options: [
      {
        label: "先回“收到”，然后做个能交差的最小版本。",
        vote: { MOYU: 3, PROCRS: 1 },
      },
      {
        label: "直接确认需求范围和时间点，先把边界锁死。",
        vote: { RIGOR: 3, INWVL: 1 },
      },
      {
        label: "先丢一个试行方案，看对方吃不吃这一套。",
        vote: { SPARK: 3, INWVL: 1 },
      },
    ],
  },
  {
    title: "对象/朋友说“都行”，你通常会：",
    sub: "这句话一出，最能看出你平时怎么选？",
    options: [
      {
        label: "先给两个备选，看看对方眼神往哪飘。",
        vote: { SPARK: 3, RERUN: 1 },
      },
      { label: "直接拍板并安排路线，主打不拖。", vote: { INWVL: 3, RIGOR: 1 } },
      {
        label: "先等等感觉，没感觉我真选不出来。",
        vote: { PROCRS: 3, LAZIQ: 1 },
      },
    ],
  },
  {
    title: "你给自己立的计划，第三天就掉线了，你会：",
    sub: "计划翻车后，你通常怎么圆回来？",
    options: [
      {
        label: "把规则再写细一点，让自己无脑执行。",
        vote: { RIGOR: 3, SOLOX: 1 },
      },
      {
        label: "把计划改轻一点，能跑起来比完美重要。",
        vote: { COOL: 3, LAZIQ: 1 },
      },
      {
        label: "先问“这事到底值不值”，值才继续。",
        vote: { ZENIT: 2, INWVL: 2 },
      },
    ],
  },
  {
    title: "团队群里有人阴阳怪气，你会怎么处理？",
    sub: "这种场面，你一般怎么接招？",
    options: [
      {
        label: "拉回流程：谁做什么、几点前交，先止损。",
        vote: { RIGOR: 3, INWVL: 1 },
      },
      { label: "先缓和气氛，别让局面继续发酵。", vote: { COOL: 3, AUTHX: 1 } },
      { label: "直接点名问题，不拐弯。", vote: { AUTHX: 3, CLINGY: 1 } },
    ],
  },
  {
    title: "你刷到别人“年薪翻倍/上岸/出国”动态时，心里会？",
    sub: "别人一晒成果，你心里会怎么想？",
    options: [
      {
        label: "DNA 动了，马上加码：我也要跟上节奏。",
        vote: { FOMAX: 3, INWVL: 1 },
      },
      {
        label: "先稳住，不拿别人的快进条打自己。",
        vote: { LAZIQ: 3, MOYU: 1 },
      },
      {
        label: "评估下是否适合我，不适合就不硬追。",
        vote: { SOLOX: 2, COOL: 1, RIGOR: 1 },
      },
    ],
  },
  {
    title: "你最常用的“启动器”是？",
    sub: "卡住的时候，你一般靠啥开机？",
    options: [
      {
        label: "12 分钟冲刺法：先干一点，别想一万步。",
        vote: { MOYU: 2, LAZIQ: 2 },
      },
      { label: "拆步骤清单：按序执行就不会慌。", vote: { RIGOR: 3, INWVL: 1 } },
      { label: "做个小样先跑，边跑边修。", vote: { SPARK: 3, RERUN: 1 } },
    ],
  },
  {
    title: "你在人际里最在意的是？",
    sub: "你更在意被懂，还是别出岔子？",
    options: [
      {
        label: "真诚表达，但会注意对方能不能接住。",
        vote: { AUTHX: 3, COOL: 1 },
      },
      {
        label: "先保不出错，尴尬比沉默更可怕。",
        vote: { SOLOX: 2, RIGOR: 1, PROCRS: 1 },
      },
      {
        label: "情绪对了我才有状态，感受最先。",
        vote: { CLINGY: 3, FOMAX: 1 },
      },
    ],
  },
  {
    title: "项目翻车后，你更常见的反应是？",
    sub: "翻车那一下，你通常先干啥？",
    options: [
      {
        label: "先复盘 bug 根因，再写“下次别踩”清单。",
        vote: { RERUN: 3, ZENIT: 1 },
      },
      {
        label: "先把情绪降下来，不在低电量时做决定。",
        vote: { LAZIQ: 3, MOYU: 1 },
      },
      {
        label: "先继续推，等交付后再复盘。",
        vote: { INWVL: 2, XSWL: 1, RERUN: 1 },
      },
    ],
  },
  {
    title: "学习/工作节奏里，你更像哪种：",
    sub: "别想太美，选你平时真的那套？",
    options: [
      { label: "冲刺推进型：先干再调。", vote: { INWVL: 3, RIGOR: 1 } },
      {
        label: "等待启动型：条件不到位很难开机。",
        vote: { PROCRS: 3, RERUN: 1 },
      },
      { label: "低耗稳定型：慢一点，但不断线。", vote: { LAZIQ: 3, MOYU: 1 } },
    ],
  },
  {
    title: "和不熟的人同桌吃饭，你通常会：",
    sub: "跟不熟的人一桌，你会怎么打开局面？",
    options: [
      { label: "自然聊几句，但不硬凹热络。", vote: { AUTHX: 2, COOL: 2 } },
      {
        label: "礼貌微笑+低频发言，主打安全下线。",
        vote: { SOLOX: 3, RIGOR: 1 },
      },
      {
        label: "会观察对方反馈再调整自己语气。",
        vote: { CLINGY: 3, FOMAX: 1 },
      },
    ],
  },
  {
    title: "你收到一段 4 分钟长语音，第一反应是：",
    sub: "长语音一来，你的第一反应通常是？",
    options: [
      { label: "先转文字/倍速，不浪费注意力。", vote: { PROCRS: 3, MOYU: 1 } },
      { label: "先回个梗缓冲一下，再听重点。", vote: { XSWL: 3, COOL: 1 } },
      {
        label: "边听边记要点，整理成可执行信息。",
        vote: { RIGOR: 3, ZENIT: 1 },
      },
    ],
  },
  {
    title: "临时被叫去救场做 PPT，你会：",
    sub: "临时救场这种活，你一般怎么上？",
    options: [
      { label: "先套现成模板，保命交付优先。", vote: { MOYU: 3, RIGOR: 1 } },
      { label: "先问清目标，按逻辑重排结构。", vote: { RIGOR: 3, INWVL: 1 } },
      {
        label: "先做一页样张试风格，再决定整体方向。",
        vote: { SPARK: 3, COOL: 1 },
      },
    ],
  },
  {
    title: "你看中一个新机会（副业/项目），但风险不小，你会？",
    sub: "看着挺香，但也有坑，你会怎么想？",
    options: [
      { label: "先小额试水，能跑通再加码。", vote: { SPARK: 3, INWVL: 1 } },
      {
        label: "先拉表格评估成本收益，再决定上不上。",
        vote: { RIGOR: 3, ZENIT: 1 },
      },
      { label: "先按兵不动，等信号更明确。", vote: { SOLOX: 2, PROCRS: 2 } },
    ],
  },
  {
    title: "被人误会后，你通常会：",
    sub: "被误会这事，你通常是立刻回击还是先缓缓？",
    options: [
      { label: "立刻澄清，避免剧情越跑越偏。", vote: { AUTHX: 3, INWVL: 1 } },
      {
        label: "先冷静一下，再用更稳的方式解释。",
        vote: { COOL: 3, ZENIT: 1 },
      },
      { label: "先自己消化，确认安全再开口。", vote: { SOLOX: 3, RERUN: 1 } },
    ],
  },
  {
    title: "大家都在卷证书/比赛/实习，你会：",
    sub: "别人都在冲，你一般怎么跟节奏？",
    options: [
      { label: "也冲，怕慢一步就掉队。", vote: { FOMAX: 3, INWVL: 1 } },
      {
        label: "挑最适合自己的一个赛道，别全都要。",
        vote: { ZENIT: 3, RIGOR: 1 },
      },
      {
        label: "先不追热点，优先把自己状态养稳。",
        vote: { LAZIQ: 3, PROCRS: 1 },
      },
    ],
  },
  {
    title: "手机只剩 10% 电，还在外面，你会：",
    sub: "电量告急的时候，你一般先保啥？",
    options: [
      {
        label: "立刻切省电模式，保核心功能在线。",
        vote: { RIGOR: 3, SOLOX: 1 },
      },
      {
        label: "先发关键消息报平安，再找充电点。",
        vote: { COOL: 3, AUTHX: 1 },
      },
      { label: "先慌一秒，然后边走边碰碰运气。", vote: { FOMAX: 2, SPARK: 2 } },
    ],
  },
  {
    title: "你又一次立 flag 失败了，下一步通常是：",
    sub: "flag 又倒了，你一般咋收场？",
    options: [
      { label: "把目标砍半，先保连续打卡。", vote: { MOYU: 3, LAZIQ: 1 } },
      {
        label: "复盘失败点，重做一版更可执行计划。",
        vote: { RERUN: 3, RIGOR: 1 },
      },
      { label: "发个“我又寄了”梗，笑完继续。", vote: { XSWL: 3, COOL: 1 } },
    ],
  },
  {
    title: "朋友突然失联两天，你脑内剧本更接近：",
    sub: "人突然没声了，你脑子里会先跑什么剧情？",
    options: [
      {
        label: "是不是我哪里说错了？会反复回看聊天记录。",
        vote: { CLINGY: 3, RERUN: 1 },
      },
      {
        label: "先发一句轻量问候，给对方空间也给自己答案。",
        vote: { AUTHX: 2, COOL: 2 },
      },
      { label: "不追问，等对方上线再说。", vote: { SOLOX: 2, LAZIQ: 2 } },
    ],
  },
  {
    title: "要做一次公开发言，你准备方式更像？",
    sub: "要上台了，你一般怎么准备？",
    options: [
      {
        label: "把稿子写到很细，连停顿都设计好。",
        vote: { RIGOR: 3, SOLOX: 1 },
      },
      { label: "先搭主干，现场看气氛灵活发挥。", vote: { COOL: 3, SPARK: 1 } },
      { label: "先做几次小范围试讲，边试边调。", vote: { SPARK: 2, ZENIT: 2 } },
    ],
  },
  {
    title: "当你发现自己已经绷不住了，你会优先：",
    sub: "真快顶不住的时候，你先救哪一块？",
    options: [
      {
        label: "暂停外界输入，先把身体状态拉回来。",
        vote: { LAZIQ: 3, PROCRS: 1 },
      },
      { label: "找人短聊一下，把情绪说出来。", vote: { CLINGY: 2, XSWL: 2 } },
      {
        label: "先完成一个最小任务，靠行动把自己拉出泥潭。",
        vote: { INWVL: 3, MOYU: 1 },
      },
    ],
  },
  {
    title: "最后一题：今晚只能选一个“升级动作”，你会？",
    sub: "今晚只做一件事的话，你最可能干啥？",
    options: [
      {
        label: "整理明天待办，只选 3 件必须完成。",
        vote: { RIGOR: 3, ZENIT: 1 },
      },
      {
        label: "先做 20 分钟小行动，先把拖延打断。",
        vote: { INWVL: 2, MOYU: 2 },
      },
      { label: "早点睡，给自己一次满电重启。", vote: { PROCRS: 2, LAZIQ: 2 } },
    ],
  },
  {
    title: "朋友临时拉你拍合照，你最真实的反应是？",
    sub: "镜头一举起来，你通常是啥反应？",
    options: [
      {
        label: "先站边边，确认自己不会被硬推去 C 位。",
        vote: { SOLOX: 3, RIGOR: 1 },
      },
      {
        label: "立刻找角度，拍完顺手帮大家修一修。",
        vote: { COOL: 2, AUTHX: 1, SPARK: 1 },
      },
      {
        label: "一边摆 pose 一边观察大家有没有笑出来。",
        vote: { CLINGY: 2, XSWL: 2 },
      },
    ],
  },
  {
    title: "手机突然 20 条未读，你会先点开哪种？",
    sub: "消息炸了的时候，你先看哪一类？",
    options: [
      { label: "重要的人先回，其他先挂起。", vote: { ZENIT: 2, RIGOR: 1 } },
      {
        label: "先把最吵的红点清掉，不然心里一直刺挠。",
        vote: { FOMAX: 2, MOYU: 1 },
      },
      {
        label: "开 1.5 倍速扫一眼，能不回的先不回。",
        vote: { LAZIQ: 2, SOLOX: 1 },
      },
    ],
  },
  {
    title: "朋友让你帮他改文案/作业/简历，你通常会：",
    sub: "朋友来求助，你一般会怎么接？",
    options: [
      {
        label: "直接改到能看，顺手把逻辑也顺一遍。",
        vote: { AUTHX: 3, INWVL: 1 },
      },
      {
        label: "先说一句“我看看”，然后开始整活。",
        vote: { SPARK: 3, XSWL: 1 },
      },
      {
        label: "先问清楚他到底想要什么，别让我盲修。",
        vote: { ZENIT: 2, RIGOR: 1 },
      },
    ],
  },
  {
    title: "突然有人鸽你，你脑内最先冒出来的是？",
    sub: "被鸽那一下，你脑子里最先蹦出来啥？",
    options: [
      { label: "没事，我先自己消化一下，再说。", vote: { SOLOX: 2, LAZIQ: 1 } },
      { label: "我的天呐？这也能鸽？先震一下。", vote: { FOMAX: 3, XSWL: 1 } },
      {
        label: "好，计划改一下，别影响后面节奏。",
        vote: { ZENIT: 2, INWVL: 1 },
      },
    ],
  },
  {
    title: "周一早上，老板群里连发三条消息，你会：",
    sub: "周一开机，你一般先怎么过这一关？",
    options: [
      { label: "先摸清优先级，别让自己瞎冲。", vote: { ZENIT: 2, INWVL: 1 } },
      { label: "先回个“收到”，然后开干。", vote: { AUTHX: 2, MOYU: 1 } },
      {
        label: "先假装没看到，给大脑一点缓冲时间。",
        vote: { PROCRS: 2, LAZIQ: 1 },
      },
    ],
  },
  {
    title: "你发现自己又在刷短视频，时间飞了，你会：",
    sub: "刷着刷着时间没了，你一般咋处理？",
    options: [
      { label: "我先清醒一下，把手机倒扣。", vote: { ZENIT: 2, MOYU: 1 } },
      { label: "再刷 5 分钟，真的最后 5 分钟。", vote: { SPARK: 3, MOYU: 1 } },
      { label: "这题我熟，先睡个回笼觉再说。", vote: { PROCRS: 2, LAZIQ: 1 } },
    ],
  },
  {
    title: "深夜突然想发个朋友圈，但又怕太矫情，你会：",
    sub: "想发又怕矫情，你一般会怎么拿捏？",
    options: [
      {
        label: "先删三遍，最后还是发个很短的版本。",
        vote: { AUTHX: 2, SOLOX: 1 },
      },
      {
        label: "想想算了，留给明天的我自己看。",
        vote: { PROCRS: 2, LAZIQ: 1 },
      },
      {
        label: "发就发，顺手配个梗，把情绪包装轻一点。",
        vote: { XSWL: 2, COOL: 1 },
      },
    ],
  },
];
