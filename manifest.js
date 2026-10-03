/* ============================================================
   阳光书房 · 资料库 —— 资料清单（由 build.js 自动生成）
   ------------------------------------------------------------
   这个文件可以直接手工改。改完再跑 build.js，
   你手工设置的 locked / pinned / tags / term 会被保留。

   字段说明：
     name   资料名称（家长看到的标题）
     grade  七年级 / 八年级 / 九年级 / 通用
     type   讲义 / 试卷 / 答案 / 专题 / 模板
     term   学期，可留空
     tags   搜索关键词，多写几个方便搜到
     date   更新日期，用于排序
     size   文件大小
     file   和网页放在一起的文件路径（推荐，家长点开直接看）
     url    网盘分享链接（和 file 二选一）
     locked true = 需要口令才能下载
     pinned true = 置顶
   ============================================================ */

window.SITE = {
  title: '阳光书房 · 资料库',
  subtitle: '初中数学资料，随时查、随时下',
  notice: '试卷合辑可直接下载；带「学员区」标记的需要口令，找王老师要，王老师公众号“阿基米锐”。',
  passcode: '2026',
  passcodeHint: '学员区口令'
};

window.MATERIALS = [
  {
    name: '七年级上 · 第一次月考试卷合辑（详细解析）',
    grade: '七年级',
    type: '答案',
    term: '2026秋',
    tags: ['月考','解析','答案','阿基米锐'],
    date: '2026-09-15',
    size: '9.2 MB',
    file: 'files/g7-mock1-ans.pdf',
    url: '',
    locked: true,
    pinned: false
  },
  {
    name: '七年级上 · 第一次月考试卷合辑',
    grade: '七年级',
    type: '试卷',
    term: '2026秋',
    tags: ['月考','阿基米锐','试卷合辑'],
    date: '2026-09-15',
    size: '3.7 MB',
    file: 'files/g7-mock1.pdf',
    url: '',
    locked: false,
    pinned: false
  },
  {
    name: '七年级 · 专题一 有理数混合运算技巧',
    grade: '七年级',
    type: '专题',
    term: '2026秋',
    tags: ['有理数', '运算技巧', '暑期'],
    date: '2026-10-03',
    size: '0.3 MB',
    file: 'files/g7-topic1-rational.pdf',
    url: '',
    locked: true,
    pinned: false
  },
  {
    name: '七年级 · 专题二 绝对值的几何意义',
    grade: '七年级',
    type: '专题',
    term: '2026秋',
    tags: ['绝对值', '几何意义', '暑期'],
    date: '2026-10-03',
    size: '0.4 MB',
    file: 'files/g7-topic2-absvalue.pdf',
    url: '',
    locked: true,
    pinned: false
  },
  {
    name: '七年级 · 专题三 第一次月考题型',
    grade: '七年级',
    type: '专题',
    term: '2026秋',
    tags: ['月考', '题型', '暑期'],
    date: '2026-10-03',
    size: '0.7 MB',
    file: 'files/g7-topic3-mock1.pdf',
    url: '',
    locked: true,
    pinned: false
  },
  {
    name: '七年级 · 第一周秋季压轴题打卡',
    grade: '七年级',
    type: '专题',
    term: '2026秋',
    tags: ['压轴题','打卡','第一周'],
    date: '2026-09-11',
    size: '944 KB',
    file: 'files/g7-week1.pdf',
    url: '',
    locked: true,
    pinned: true
  },
  {
    name: '八年级 · 全等三角形的判定与性质',
    grade: '八年级',
    type: '讲义',
    term: '2026秋',
    tags: ['全等三角形', '判定', '性质', '阿基米锐'],
    date: '2026-10-03',
    size: '1.7 MB',
    file: 'files/g8-congruence-criteria.pdf',
    url: '',
    locked: true,
    pinned: false
  },
  {
    name: '八年级 · 全等三角形模型知识点',
    grade: '八年级',
    type: '讲义',
    term: '2026秋',
    tags: ['全等三角形','模型','几何','知识点'],
    date: '2026-09-25',
    size: '345 KB',
    file: 'files/g8-congruence.pdf',
    url: '',
    locked: false,
    pinned: false
  },
  {
    name: '八年级上 · 第一次月考试卷合辑（解析）',
    grade: '八年级',
    type: '答案',
    term: '2026秋',
    tags: ['月考','解析','答案','阿基米锐'],
    date: '2026-09-18',
    size: '15.7 MB',
    file: 'files/g8-mock1-ans.pdf',
    url: '',
    locked: true,
    pinned: false
  },
  {
    name: '八年级上 · 第一次月考试卷合辑',
    grade: '八年级',
    type: '试卷',
    term: '2026秋',
    tags: ['月考','阿基米锐','试卷合辑'],
    date: '2026-09-18',
    size: '5.4 MB',
    file: 'files/g8-mock1.pdf',
    url: '',
    locked: false,
    pinned: false
  },
  {
    name: '九年级 · 反比例函数打卡练习',
    grade: '九年级',
    type: '专题',
    term: '2026秋',
    tags: ['反比例函数','打卡','函数'],
    date: '2026-09-25',
    size: '765 KB',
    file: 'files/g9-inverse-func.pdf',
    url: '',
    locked: true,
    pinned: false
  },
  {
    name: '九年级上 · 第一次月考试卷合辑（解析）',
    grade: '九年级',
    type: '答案',
    term: '2026秋',
    tags: ['月考','解析','答案','阿基米锐'],
    date: '2026-09-21',
    size: '17.1 MB',
    file: 'files/g9-mock1-ans.pdf',
    url: '',
    locked: true,
    pinned: false
  },
  {
    name: '九年级上 · 第一次月考易错题整理',
    grade: '九年级',
    type: '专题',
    term: '2026秋',
    tags: ['易错题','月考','九上'],
    date: '2026-09-25',
    size: '1.7 MB',
    file: 'files/g9-mock1-traps.pdf',
    url: '',
    locked: true,
    pinned: false
  },
  {
    name: '九年级上 · 第一次月考试卷合辑',
    grade: '九年级',
    type: '试卷',
    term: '2026秋',
    tags: ['月考','阿基米锐','试卷合辑'],
    date: '2026-09-19',
    size: '4.8 MB',
    file: 'files/g9-mock1.pdf',
    url: '',
    locked: false,
    pinned: false
  },
  {
    name: '九年级 · 动点最值问题',
    grade: '九年级',
    type: '专题',
    term: '2026秋',
    tags: ['动点','最值','几何','压轴题'],
    date: '2026-09-25',
    size: '606 KB',
    file: 'files/g9-moving-point.pdf',
    url: '',
    locked: true,
    pinned: false
  },
  {
    name: '南京中考数学真题 · 2015',
    grade: '中考',
    type: '试卷',
    term: '',
    tags: ['南京','中考','真题','2015'],
    date: '2026-09-28',
    size: '1.0 MB',
    file: 'files/nj-zhongkao-2015.pdf',
    url: '',
    locked: false,
    pinned: false
  },
  {
    name: '南京中考数学真题 · 2016',
    grade: '中考',
    type: '试卷',
    term: '',
    tags: ['南京','中考','真题','2016'],
    date: '2026-09-28',
    size: '1.0 MB',
    file: 'files/nj-zhongkao-2016.pdf',
    url: '',
    locked: false,
    pinned: false
  },
  {
    name: '南京中考数学真题 · 2017',
    grade: '中考',
    type: '试卷',
    term: '',
    tags: ['南京','中考','真题','2017'],
    date: '2026-09-28',
    size: '1012 KB',
    file: 'files/nj-zhongkao-2017.pdf',
    url: '',
    locked: false,
    pinned: false
  },
  {
    name: '南京中考数学真题 · 2018',
    grade: '中考',
    type: '试卷',
    term: '',
    tags: ['南京','中考','真题','2018'],
    date: '2026-09-28',
    size: '989 KB',
    file: 'files/nj-zhongkao-2018.pdf',
    url: '',
    locked: false,
    pinned: false
  },
  {
    name: '南京中考数学真题 · 2019',
    grade: '中考',
    type: '试卷',
    term: '',
    tags: ['南京','中考','真题','2019'],
    date: '2026-09-28',
    size: '1.0 MB',
    file: 'files/nj-zhongkao-2019.pdf',
    url: '',
    locked: false,
    pinned: false
  },
  {
    name: '南京中考数学真题 · 2020',
    grade: '中考',
    type: '试卷',
    term: '',
    tags: ['南京','中考','真题','2020'],
    date: '2026-09-28',
    size: '957 KB',
    file: 'files/nj-zhongkao-2020.pdf',
    url: '',
    locked: false,
    pinned: false
  },
  {
    name: '南京中考数学真题 · 2021',
    grade: '中考',
    type: '试卷',
    term: '',
    tags: ['南京','中考','真题','2021'],
    date: '2026-09-28',
    size: '1.2 MB',
    file: 'files/nj-zhongkao-2021.pdf',
    url: '',
    locked: false,
    pinned: false
  },
  {
    name: '南京中考数学真题 · 2022',
    grade: '中考',
    type: '试卷',
    term: '',
    tags: ['南京','中考','真题','2022'],
    date: '2026-09-28',
    size: '1.6 MB',
    file: 'files/nj-zhongkao-2022.pdf',
    url: '',
    locked: false,
    pinned: false
  },
  {
    name: '南京中考数学真题 · 2023',
    grade: '中考',
    type: '试卷',
    term: '',
    tags: ['南京','中考','真题','2023'],
    date: '2026-09-28',
    size: '2.0 MB',
    file: 'files/nj-zhongkao-2023.pdf',
    url: '',
    locked: false,
    pinned: false
  },
  {
    name: '南京中考数学真题 · 2024',
    grade: '中考',
    type: '试卷',
    term: '',
    tags: ['南京','中考','真题','2024'],
    date: '2026-09-28',
    size: '1.4 MB',
    file: 'files/nj-zhongkao-2024.pdf',
    url: '',
    locked: false,
    pinned: false
  },
  {
    name: '南京中考数学真题 · 2025',
    grade: '中考',
    type: '试卷',
    term: '',
    tags: ['南京','中考','真题','2025'],
    date: '2026-09-28',
    size: '1.3 MB',
    file: 'files/nj-zhongkao-2025.pdf',
    url: '',
    locked: false,
    pinned: false
  }
];
