"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { LbtiType, LbtiTypeCode } from "@/data/types";
import { LBti_TYPES } from "@/data/types";
import DimGrid from "@/components/DimGrid";
import Link from "next/link";
import TypeAvatar from "@/components/TypeAvatar";

function buildExtraContent(type: LbtiType) {
  const groups = {
    self: type.dims.S1 + type.dims.S2 + type.dims.S3,
    emotion: type.dims.E1 + type.dims.E2 + type.dims.E3,
    action: type.dims.Ac1 + type.dims.Ac2 + type.dims.Ac3,
    social: type.dims.So1 + type.dims.So2 + type.dims.So3,
  };

  const dominant = Object.entries(groups).sort(
    (a, b) => b[1] - a[1],
  )[0][0] as keyof typeof groups;

  const detailMap = {
    self: {
      why: [
        "你一看事情有点飘，脑子第一反应不是冲，是先把自己按稳。",
        "别人还在慌，你可能已经先在心里默念：别急，先把局面捋顺。",
        "你不是慢，是你不想在没站稳的时候瞎冲，怕一脚踩空。",
      ],
      tips: [
        "给自己留个“重启动作”，比如喝口水、走两步、把脑子里的事写下来。",
        "今天只抓一个最重要的事，别把自己搞成待办清单人柱力。",
        "能分出去的活就分一点，别每次都把自己当总包。",
      ],
      soul: [
        "你是真负责，还是一紧张就习惯把锅先背上？",
        "如果今天不追求满分，只求顺利过关，你会不会轻松一点？",
        "你能不能接受自己偶尔没那么猛，但照样挺能打？",
      ],
    },
    emotion: {
      why: [
        "你对空气里的情绪味道很敏感，别人还没开口，你先感觉到不对劲。",
        "这让你很会共情，但也容易把别人的事顺手揽进自己脑子里。",
        "有时候不是事儿多，是你脑内小剧场开播太快。",
      ],
      tips: [
        "先给情绪贴个标签，别一上来就把自己吓到：我现在是烦，不是完了。",
        "情绪上头的时候，先做一件小事，别让大脑直接开连续剧。",
        "如果开始反刍，先把脑子从“审判庭”切回“便利店”。",
      ],
      soul: [
        "你是在哄情绪，还是已经被情绪牵着鼻子跑了？",
        "你想被懂的时候，有没有先把自己讲明白？",
        "你是不是总帮别人翻译心情，轮到自己就开始含糊其辞？",
      ],
    },
    action: {
      why: [
        "你看到事情卡住，第一反应就是：行，那我来推一下。",
        "你不太喜欢原地打转，脑子里总在找能动起来的办法。",
        "别人还在观望，你已经在想怎么把路先铺出来了。",
      ],
      tips: [
        "把大事拆成半小时能干完的小块，别上来就挑战人生副本。",
        "每周删掉几个其实没那么重要的活，别把自己卷成陀螺。",
        "能用模板就用模板，能偷一点巧就别硬刚。",
      ],
      soul: [
        "你是真想赢，还是单纯怕自己掉队？",
        "如果今天不冲刺，你会不会突然不知道怎么安放自己？",
        "你有没有把“忙起来”当成安全感来源？",
      ],
    },
    social: {
      why: [
        "你对人际节奏很敏感，场子一变，你会先调整自己的站位。",
        "别人给你的反馈会直接影响你的状态，所以你特别在意自己有没有被接住。",
        "你不是非得热闹，你要的是别在关系里憋得慌。",
      ],
      tips: [
        "先准备一句能撤退的话，真不舒服时可以体面下线。",
        "别想着照顾所有人，先把最重要的那几段关系照顾好。",
        "偶尔不回消息也没事，你不用 24 小时证明自己在线。",
      ],
      soul: [
        "你是在维持关系，还是在硬撑场面？",
        "如果你不再配合，真正还会留下来的人是谁？",
        "你在意的是关系，还是关系里那个被看见的自己？",
      ],
    },
  };

  return detailMap[dominant];
}

function buildShareLines(type: LbtiType) {
  const shareMap: Record<string, [string, string]> = {
    MOYU: [
      "我不摆，是我在用最低耗方式活着。",
      "这份结果很像我：能省电就不硬刚。",
    ],
    XSWL: [
      "别看我在笑，我其实已经把情绪处理完一半了。",
      "我属于那种先整活，再继续的人。",
    ],
    COOL: [
      "我不是没情绪，我只是先把场面稳住。",
      "我做事讲究节奏，别把我逼成急刹车。",
    ],
    SOLOX: [
      "我不是不合群，我只是喜欢把边界摆整齐。",
      "能安静解决的事，我一般不想多说。",
    ],
    CLINGY: [
      "我对气氛很敏感，别拿“想太多”敷衍我。",
      "我不是黏，我只是很在乎。",
    ],
    INWVL: [
      "我不是爱卷，我是习惯把路走到更划算的位置。",
      "能少走弯路，我绝不多熬。",
    ],
    LAZIQ: [
      "我先歇一会儿，不是躺平，是保命。",
      "我属于那种慢一点，但不会把自己搞炸的人。",
    ],
    RERUN: [
      "我会复盘到有点上头，但最后还是会继续往前。",
      "难受可以，卡在里面不行。",
    ],
    ZENIT: [
      "我看得很清楚，所以也更知道怎么稳。",
      "我不是高冷，我只是脑子一直在调参。",
    ],
    RIGOR: [
      "别跟我比乱，我先把可控的东西收拾好。",
      "我做事不花哨，但效率很硬。",
    ],
    SPARK: ["我先冲一下，世界要不要跟上再说。", "反正先试，怕什么。"],
    AUTHX: ["我说 ok，不代表我啥都没想。", "我想表达清楚，不想靠猜。"],
    FOMAX: ["我看到机会就想补位，手比脑子快。", "我不是慌，我是怕错过。"],
    PROCRS: ["我先睡一觉，醒来再继续。", "别急，我的系统正在重启。"],
  };

  return shareMap[type.code] ?? ["这结果挺像我。", "我先收藏，回头再琢磨。"];
}

function buildPersonaSketch(type: LbtiType): string[] {
  const sketchMap: Record<LbtiTypeCode, string[]> = {
    MOYU: [
      "你像那种手机永远 20% 电量还能撑完整天的人，表面佛系，实际上每一步都在算损耗。",
      "别人笑你慢，你心里门儿清：会冲不稀奇，会稳住才高级，毕竟活着比燃尽更难。",
      "你不是不努力，你是看透了“瞎努力”最贵，宁可慢开机，也不把自己烧成黑屏。",
      "你嘴上说随缘，手上却一直在做低配但能交付的版本，这套在 SBTI 里就是典型“省电实用派”。",
    ],
    XSWL: [
      "你是气氛组里的灭火器，场子一尴尬你先抛梗，笑完大家才发现问题已经被你拆小了。",
      "你嘴上哈哈哈，心里其实在说：别慌，我先把天聊起来，顺便把情绪托住。",
      "你把幽默当缓冲垫，不是逃避，是给每个人留台阶，也给自己留体面。",
      "表面玩梗王，内核其实很会察言观色，属于“先逗乐，再落地”的社交工程师。",
    ],
    COOL: [
      "你像开车不踩急刹那种人，路况再乱也先控方向盘，主打一个稳字当头。",
      "你看起来无所谓，其实是把情绪放后台运行：不吵不闹，但关键时刻一刀见血。",
      "你最像那种群里平时潜水，关键节点一句话定调的人，少说但有效。",
      "很多人误会你冷，其实你只是先控场再表达，属于“情绪不卡业务”的成熟型人格。",
    ],
    SOLOX: [
      "你不是社恐，你是社交里的极简主义，能一句说完绝不凑三段，能独处就不硬凑局。",
      "你最狠的能力是边界感：不消耗别人，也不让别人随便消耗你。",
      "你看着安静，实则心里过滤器开满：废话自动折叠，有用信息才入库。",
      "你不是拒绝关系，你是拒绝低质量关系，像 SBTI 里那类“选择性上线”的清醒玩家。",
    ],
    CLINGY: [
      "你像高灵敏雷达，别人一个语气词你都能听出天气预报，心软得像没设防火墙。",
      "你常说没事，其实心里小本本记着：我不是矫情，我只是认真对待每次靠近。",
      "你最怕的不是争吵，是“突然变冷”，那种没说明书的沉默会让你脑补到天亮。",
      "你自带情感放大镜，容易受伤也容易治愈别人，属于“敏感但有温度”的共情型。",
    ],
    INWVL: [
      "你是那种会给人生做甘特图的人，卷不是目的，少走弯路才是你真正的野心。",
      "别人拼体力，你拼方法论：能优化流程就不拿命硬抗，这叫聪明地狠。",
      "你的爽点不是忙，是推进；不是加班，是结果可见，这点很 SBTI“执行脑”。",
      "你偶尔看起来有点急，其实只是对“拖着不动”过敏，行动是你的镇定剂。",
    ],
    LAZIQ: [
      "你像懂养生的老程序员，先保系统稳定再谈性能，拒绝把自己过成高温 CPU。",
      "你看着慢，其实是长期主义：今天不炸，明天才能继续赢。",
      "你特别懂“人不是机器”，状态不对就降频，这不是摆烂，是防止彻底宕机。",
      "你的人生策略是小火慢炖，别人一时冲刺很猛，你靠续航把赛程跑完。",
    ],
    RERUN: [
      "你是内心导演，很多事会在脑海重播到第二季，边难受边找剧情漏洞。",
      "你的天赋是把情绪炼成经验包：疼是真疼，但你不会白疼。",
      "你容易在深夜开复盘会，但好处是你每次复盘完都比昨天多一点清醒。",
      "你不是玻璃心，你是高解析度情绪体质，适合把感受转成洞察，而不是转成内耗。",
    ],
    ZENIT: [
      "你像手里一直有调参面板的人，风浪来了先看变量，不急着把自己定义成失败。",
      "你偶尔冷，不是没温度，是看太明白：人生很多局，稳住比赢一把更重要。",
      "你遇事先拆解再反应，这种“先看结构后给情绪”在 SBTI 里是稀缺稳定核。",
      "你不爱喊口号，但总能在关键时刻给出可执行答案，像队伍里的静音主心骨。",
    ],
    RIGOR: [
      "你是现实派总工，先分可控和不可控，不跟空气较劲，只跟方案较真。",
      "别人情绪上头，你直接上流程：看起来无情，其实是在保护每个人的精力。",
      "你最怕的是规则含糊，因为模糊会制造返工，你天生反低效。",
      "你不是爱管人，你是爱管系统；系统一顺，大家都能少掉几层精神损耗。",
    ],
    SPARK: [
      "你像行动版试用期，想法一来先上手，先跑起来再修方向，胆子比拖延大。",
      "你嘴上冲就完事，心里门清：不试才最亏，试错至少还能长本事。",
      "你有股“先干了再说”的生命力，适合开荒，不适合长期被流程绑手绑脚。",
      "很多人以为你莽，其实你是小步快跑型决策，靠反馈迭代，而不是靠空想。",
    ],
    AUTHX: [
      "你是表达洁癖选手，最怕话说半截靠猜，宁可慢一点也要把意思讲透。",
      "你那句 ok 往往是高级版：我理解了，也想被认真理解。",
      "你最烦“你应该懂我吧”这种暗号沟通，信息不对称会让你抓狂。",
      "你不是较真，你是在给关系做去噪，属于“把误会成本降到最低”的沟通派。",
    ],
    FOMAX: [
      "你像消息提醒全开的玩家，风吹草动都怕错过，机会雷达 24 小时在线。",
      "你不是爱慌，是太想把生活抓在手里：抢的不是热闹，是安全感。",
      "你容易一边冲一边焦虑，但也正因为这股紧迫感，你常常比别人先抓住窗口。",
      "你的课题不是再快一点，而是学会“慢半拍也不会输”，把节奏从外界拿回自己手里。",
    ],
    PROCRS: [
      "你是重启流高手，困了就先关机，不跟低电量的自己硬碰硬。",
      "别人说你拖，你心里想的是：状态不对时硬上，只会把今天和明天一起透支。",
      "你看起来像在等灵感，其实是在等大脑回到可用区间，这点特别真实。",
      "你的升级路线不是逼自己卷，而是把启动门槛做低：先动一厘米，再谈一公里。",
    ],
  };

  return (
    sketchMap[type.code] ?? [
      "你这个类型有点意思，表面云淡风轻，心里其实有一套自己的生存算法。",
      "你不是没故事，只是把很多话折叠成了一个表情包。",
      "你会在关键时刻露出真本事，平时只是懒得解释太多。",
      "说白了，你不是不会活，是太懂活法有成本。",
    ]
  );
}

export default function ResultPage() {
  const router = useRouter();
  const [type, setType] = useState<LbtiType | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("lbti_result");
      if (!raw) return;
      const parsed = JSON.parse(raw) as LbtiType;
      // ensure it exists in our list (avoid stale/unknown storage)
      const exists = LBti_TYPES.some((t) => t.code === parsed.code);
      if (exists) setType(parsed);
    } catch {
      // ignore
    }
  }, []);

  function restart() {
    try {
      sessionStorage.removeItem("lbti_result");
    } catch {
      // ignore
    }
    router.push("/test");
  }

  if (!type) {
    return (
      <main className="card">
        <h2 style={{ marginTop: 0, fontSize: 18 }}>没有找到你的结果</h2>
        <p style={{ color: "var(--muted)", lineHeight: 1.7, fontSize: 14 }}>
          你需要先在答题页完成测试，系统才能生成结果卡。
        </p>
        <div className="row" style={{ marginTop: 14 }}>
          <Link href="/test">
            <button type="button">去答题</button>
          </Link>
        </div>
      </main>
    );
  }

  const extra = buildExtraContent(type);
  const shareLines = buildShareLines(type);
  const sketchLines = buildPersonaSketch(type);

  return (
    <main className="card">
      <div className="resultHead">
        <div className="resultHero">
          <div className="resultHero__square">
            <p className="resultHero__eyebrow">你的人格类型是：</p>
            <div className="resultHero__name">{type.name}</div>
            <div className="resultHero__code">{type.displayCode}</div>
            <div className="resultHero__avatar">
              <TypeAvatar code={type.code} large />
            </div>
            <p className="resultMotto resultHero__motto">{type.motto}</p>
          </div>
        </div>
        <div className="row">
          <button type="button" className="secondary" onClick={restart}>
            再测一次
          </button>
        </div>
      </div>

      <div className="resultBlock resultSketch">
        <h3 style={{ margin: 0, fontSize: 14, letterSpacing: 0.2 }}>
          人格速写
        </h3>
        <div className="resultParagraphs">
          {sketchLines.map((line, idx) => (
            <p key={`${type.code}-sketch-${idx}`} className="resultParagraph">
              {line}
            </p>
          ))}
        </div>
      </div>

      <div className="resultBlock">
        <h3 style={{ margin: 0, fontSize: 14, letterSpacing: 0.2 }}>
          15 维落点
        </h3>
        <DimGrid dims={type.dims} />
        <p
          style={{
            marginTop: 6,
            color: "var(--muted)",
            lineHeight: 1.7,
            fontSize: 13.5,
          }}
        >
          这不是诊断，是给你一个“生活策略镜子”：你更像把能量给社交、给情绪、还是给行动与执行。
        </p>
      </div>

      <div className="resultBlock">
        <h3 style={{ margin: 0, fontSize: 14, letterSpacing: 0.2 }}>
          你为什么会这样
        </h3>
        <div className="resultParagraphs">
          <p className="resultParagraph">{type.why}</p>
          {extra.why.map((line) => (
            <p key={line} className="resultParagraph">
              {line}
            </p>
          ))}
        </div>
      </div>

      <div className="resultBlock">
        <h3 style={{ margin: 0, fontSize: 14, letterSpacing: 0.2 }}>
          今晚先这么整
        </h3>
        <div className="resultParagraphs">
          <p className="resultParagraph">{type.tips}</p>
          {extra.tips.map((line) => (
            <p key={line} className="resultParagraph">
              {line}
            </p>
          ))}
        </div>
      </div>

      <div className="resultBlock">
        <h3 style={{ margin: 0, fontSize: 14, letterSpacing: 0.2 }}>
          灵魂拷问
        </h3>
        <div className="resultParagraphs">
          <p className="resultParagraph">{type.soul}</p>
          {extra.soul.map((line) => (
            <p key={line} className="resultParagraph">
              {line}
            </p>
          ))}
        </div>
      </div>

      <div className="callout">
        <strong>分享方式建议</strong>
        <div className="resultParagraphs" style={{ marginTop: 6 }}>
          <p className="resultParagraph">{shareLines[0]}</p>
          <p className="resultParagraph">{shareLines[1]}</p>
        </div>
      </div>
    </main>
  );
}
