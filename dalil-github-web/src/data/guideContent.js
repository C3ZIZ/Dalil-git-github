export const guideSections = [
  {
    id: 'intro',
    number: 1,
    title: 'مقدمة الدليل',
    summary: 'لماذا Git وGitHub مهمان لكل مبتدئ في البرمجة.',
    points: [
      'الدليل موجّه للمبتدئين والطلاب بصياغة عملية وبعيدة عن التعقيد.',
      'Git هو أداة إدارة الإصدارات محليًا، وGitHub منصة استضافة وتعاون سحابية.',
      'التحكم بالإصدارات يمنحك تتبعًا واضحًا للتغييرات والعمل الجماعي بأمان.',
    ],
  },
  {
    id: 'command-line',
    number: 2,
    title: 'أساسيات سطر الأوامر',
    summary: 'أهم الأوامر التي تحتاجها للتنقل والعمل بثقة.',
    points: [
      'أوامر البداية: mkdir, touch, ls, cd, pwd.',
      'أوامر النسخ والنقل: cp, mv، وأوامر الحذف: rm, rm -r بحذر.',
      'فهم المسارات: المطلق Absolute والنسبي Relative مع الرموز ., .., ~.',
    ],
  },
  {
    id: 'setup',
    number: 3,
    title: 'إعداد بيئة العمل',
    summary: 'تهيئة أدواتك قبل البدء: Git وVS Code.',
    points: [
      'تثبيت Git من الموقع الرسمي ثم ضبط الإعدادات الأساسية.',
      'تثبيت VS Code كبيئة تطوير خفيفة ومرنة.',
      'إنشاء حساب GitHub احترافي ومرتب لتسهيل التعاون.',
    ],
  },
  {
    id: 'first-journey',
    number: 4,
    title: 'رحلتك الأولى مع Git',
    summary: 'سير العمل الأساسي: init → add → commit → push.',
    points: [
      'ابدأ المستودع باستخدام git init ثم جهّز الملفات عبر git add.',
      'احفظ التغييرات برسائل واضحة باستخدام git commit.',
      'اربط المشروع بـ GitHub عبر git remote add origin ثم git push.',
      'استخدم .gitignore لعزل الملفات غير الضرورية أو الحساسة.',
    ],
  },
  {
    id: 'branching-prs',
    number: 5,
    title: 'إدارة الفروع وطلبات الدمج',
    summary: 'اعزل التعديلات في فروع وادمجها عبر Pull Request.',
    points: [
      'أنشئ فرعًا لكل مهمة باستخدام git checkout -b feature/your-task.',
      'ارفع الفرع ثم افتح Pull Request للمراجعة قبل الدمج.',
      'حل Merge Conflicts عبر اختيار التعديلات المناسبة ثم add وcommit.',
    ],
  },
  {
    id: 'collaboration',
    number: 6,
    title: 'التعاون والمساهمة في المشاريع',
    summary: 'ابدأ بالمشاركة في المشاريع المحلية والمفتوحة المصدر.',
    points: [
      'clone لنسخ المشاريع إلى جهازك والبدء بالتطوير.',
      'فرّق بين Collaborator (صلاحية مباشرة) وFork (نسخة مستقلة).',
      'اتبع تدفق Open Source: Fork → Branch → Commit → PR.',
    ],
  },
  {
    id: 'github-pro',
    number: 7,
    title: 'احتراف واجهة وميزات GitHub',
    summary: 'حسّن هويتك كمطور داخل منصة GitHub.',
    points: [
      'أنشئ Profile README احترافي لعرض مهاراتك ومشاريعك.',
      'استخدم Stars لحفظ المشاريع المفيدة ومتابعتها.',
      'استفد من Gist وProjects وCodespaces لتنظيم العمل.',
    ],
  },
  {
    id: 'troubleshooting',
    number: 8,
    title: 'أخطاء شائعة وحلولها',
    summary: 'حل سريع لأكثر مشاكل Git المتكررة عند المبتدئين.',
    points: [
      'نسيت add قبل commit؟ نفّذ git add . ثم commit مرة أخرى.',
      'عدلت على main مباشرة؟ انقل الشغل لفرع جديد فورًا.',
      'رسالة commit خاطئة؟ استخدم git commit --amend قبل الرفع.',
    ],
  },
  {
    id: 'cheat-sheet',
    number: 9,
    title: 'المرجع السريع لأوامر Git',
    summary: 'قسم مخصص للأوامر الأكثر استخدامًا يوميًا.',
    points: [
      'status لمعرفة حالة المشروع الحالية.',
      'log لمراجعة سجل التعديلات والتاريخ.',
      'pull وpush للمزامنة بين جهازك وGitHub.',
    ],
  },
  {
    id: 'team',
    number: 10,
    title: 'فريق العمل',
    summary: 'الأشخاص الذين قاموا بإعداد هذا الدليل.',
    points: [
      'عبدالعزيز حافظ',
      'عبدالله ابوشطيره',
      'عزام عبدالله',
      'أصيل حسن',
    ],
  },
]

export const teamMembers = [
  { name: 'عبدالعزيز حافظ', url: 'https://github.com/C3ZIZ' },
  { name: 'عبدالله ابوشطيره', url: 'https://github.com/abodee198' },
  { name: 'عزام عبدالله', url: 'https://github.com/AMT72' },
  { name: 'أصيل حسن', url: 'https://github.com/Aseel-Alzahrani' },
]

export const gitCheatSheetCategories = [
  {
    id: 'repo-setup',
    title: '1) إعداد المستودع',
    items: [
      { command: 'git init', use: 'بدء مستودع Git محلي', when: 'عند إنشاء مشروع جديد محليًا' },
      { command: 'git clone <url>', use: 'نسخ مشروع موجود', when: 'عند بدء العمل على مشروع موجود في GitHub' },
      { command: 'git config --global user.name "Name"', use: 'ضبط اسم المؤلف', when: 'مرة واحدة بعد تثبيت Git' },
      { command: 'git config --global user.email "email"', use: 'ضبط بريد المؤلف', when: 'مرة واحدة بعد تثبيت Git' },
      { command: 'git config --list', use: 'عرض الإعدادات الحالية', when: 'للتحقق من صحة إعدادات Git' },
    ],
  },
  {
    id: 'daily-flow',
    title: '2) سير العمل اليومي',
    items: [
      { command: 'git status', use: 'عرض حالة الملفات', when: 'قبل add/commit أو عند الشك في حالة المشروع' },
      { command: 'git add <file>', use: 'تجهيز ملف محدد للحفظ', when: 'عند الرغبة في commit جزئي' },
      { command: 'git add .', use: 'تجهيز كل التعديلات', when: 'بعد الانتهاء من مهمة صغيرة متكاملة' },
      { command: 'git commit -m "message"', use: 'حفظ التعديلات', when: 'بعد تجهيز التغييرات برسالة واضحة' },
      { command: 'git commit --amend', use: 'تعديل آخر commit', when: 'لتصحيح رسالة أو إضافة تعديل منسي قبل push' },
      { command: 'git log --oneline --graph --decorate', use: 'عرض سجل مختصر واضح', when: 'لفهم تاريخ الفروع والدمج بسرعة' },
      { command: 'git diff', use: 'مقارنة التعديلات غير المجهزة', when: 'قبل git add لمراجعة ما تغير' },
      { command: 'git diff --staged', use: 'مقارنة التعديلات المجهزة', when: 'قبل commit للتأكد من المحتوى النهائي' },
    ],
  },
  {
    id: 'branches',
    title: '3) إدارة الفروع',
    items: [
      { command: 'git branch', use: 'عرض الفروع المحلية', when: 'لمعرفة الفروع المتاحة والفرع الحالي' },
      { command: 'git branch -a', use: 'عرض المحلية والبعيدة', when: 'لمراجعة الفروع على remote أيضًا' },
      { command: 'git checkout -b feature/x', use: 'إنشاء فرع جديد والانتقال إليه', when: 'قبل بدء ميزة أو إصلاح جديد' },
      { command: 'git switch feature/x', use: 'التنقل بين الفروع', when: 'للانتقال السريع لفرع موجود' },
      { command: 'git branch -d feature/x', use: 'حذف فرع محلي مدموج', when: 'بعد دمج الفرع وانتهاء المهمة' },
      { command: 'git branch -D feature/x', use: 'حذف فرع بالقوة', when: 'عند الحاجة لحذف فرع غير مدموج بحذر' },
    ],
  },
  {
    id: 'remote-sync',
    title: '4) المزامنة مع GitHub',
    items: [
      { command: 'git remote add origin <url>', use: 'ربط remote جديد', when: 'بعد إنشاء مستودع GitHub لمشروعك المحلي' },
      { command: 'git remote -v', use: 'عرض remote الحالي', when: 'للتحقق من عنوان المستودع البعيد' },
      { command: 'git fetch origin', use: 'جلب التحديثات بدون دمج', when: 'عند مراجعة التغييرات قبل الدمج اليدوي' },
      { command: 'git pull origin main', use: 'جلب + دمج تحديثات main', when: 'قبل بدء شغلك أو قبل فتح PR' },
      { command: 'git push -u origin <branch>', use: 'رفع الفرع مع تتبع', when: 'أول مرة ترفع فيها فرعًا جديدًا' },
      { command: 'git push', use: 'رفع التعديلات الجديدة', when: 'بعد كل commit مكتمل وجاهز للمشاركة' },
      { command: 'git push --force-with-lease', use: 'تحديث فرع بعد rebase بأمان نسبي', when: 'عند الحاجة لتعديل تاريخ الفرع دون كسر عمل الفريق' },
    ],
  },
  {
    id: 'merge-rebase',
    title: '5) الدمج وإعادة ترتيب التاريخ',
    items: [
      { command: 'git merge feature/x', use: 'دمج فرع داخل الفرع الحالي', when: 'عند إدخال ميزة جاهزة إلى main/develop' },
      { command: 'git rebase main', use: 'إعادة بناء commits فوق main', when: 'لتاريخ أنظف قبل PR أو أثناء التحديث' },
      { command: 'git rebase -i HEAD~3', use: 'دمج/تعديل commits تفاعليًا', when: 'قبل الرفع النهائي لتنظيف التاريخ' },
      { command: 'git cherry-pick <commit>', use: 'نسخ commit محدد لفرع آخر', when: 'عند نقل إصلاح واحد بسرعة لفرع مختلف' },
      { command: 'git merge --abort', use: 'إلغاء merge جاري', when: 'إذا ظهر conflict كبير وتريد الرجوع فورًا' },
      { command: 'git rebase --abort', use: 'إلغاء rebase جاري', when: 'إذا تعقدت التعارضات أثناء rebase' },
    ],
  },
  {
    id: 'undo-recovery',
    title: '6) التراجع والاستعادة',
    items: [
      { command: 'git restore <file>', use: 'إلغاء تغييرات ملف غير مجهز', when: 'إذا عدلت ملفًا بالخطأ قبل add' },
      { command: 'git restore --staged <file>', use: 'إزالة ملف من staging', when: 'إذا أضفت ملفًا غير مقصود قبل commit' },
      { command: 'git reset --soft HEAD~1', use: 'إلغاء آخر commit مع حفظ التغييرات', when: 'إذا commit كان مبكرًا وتريد تعديل الرسالة/المحتوى' },
      { command: 'git reset --hard HEAD~1', use: 'حذف commit وتغييراته محليًا', when: 'فقط عند التأكد أن التغييرات غير مطلوبة' },
      { command: 'git revert <commit>', use: 'إنشاء commit عكسي آمن', when: 'للتراجع عن commit منشور في remote' },
      { command: 'git reflog', use: 'تتبع كل تحركات HEAD', when: 'لاستعادة عمل مفقود بعد reset/rebase' },
    ],
  },
  {
    id: 'inspect-search',
    title: '7) الفحص والبحث',
    items: [
      { command: 'git show <commit>', use: 'عرض تفاصيل commit محدد', when: 'لمراجعة تغيير معين بسرعة' },
      { command: 'git blame <file>', use: 'معرفة من عدّل كل سطر', when: 'لتحليل سبب تغيير أو فهم السياق' },
      { command: 'git log -- <file>', use: 'عرض تاريخ ملف محدد', when: 'لتتبع تطور ملف واحد' },
      { command: 'git grep "text"', use: 'بحث داخل الملفات المتتبعة', when: 'للعثور على كلمة/نمط في المشروع' },
      { command: 'git shortlog -sn', use: 'إحصائيات المساهمين', when: 'لرؤية توزيع المساهمات في المشروع' },
    ],
  },
  {
    id: 'stash-tags',
    title: '8) أدوات إضافية مهمة',
    items: [
      { command: 'git stash', use: 'حفظ تغييرات مؤقتًا', when: 'عند التبديل السريع لفرع دون commit' },
      { command: 'git stash pop', use: 'استرجاع آخر stash وحذفه', when: 'بعد العودة لإكمال نفس المهمة' },
      { command: 'git stash list', use: 'عرض stashes الموجودة', when: 'عند وجود أكثر من حفظ مؤقت' },
      { command: 'git tag v1.0.0', use: 'إنشاء tag للإصدار', when: 'عند إطلاق نسخة مستقرة' },
      { command: 'git push origin --tags', use: 'رفع tags إلى remote', when: 'بعد تعريف إصدار رسمي' },
      { command: 'git clean -fd', use: 'حذف الملفات غير المتتبعة', when: 'لتنظيف workspace بحذر شديد' },
    ],
  },
]

export const quickGitCommands = [
  { cmd: 'git status', desc: 'عرض حالة الملفات قبل أي خطوة' },
  { cmd: 'git add .', desc: 'تجهيز التعديلات في staging' },
  { cmd: 'git commit -m "message"', desc: 'حفظ التغييرات برسالة واضحة' },
  { cmd: 'git pull origin main', desc: 'سحب آخر تحديثات main قبل الشغل' },
  { cmd: 'git push -u origin feature/x', desc: 'أول رفع لفرع جديد' },
  { cmd: 'git rebase main', desc: 'تحديث فرعك قبل فتح PR' },
]
