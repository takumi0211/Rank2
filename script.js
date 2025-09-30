// 単語データ
const words = [
    {word: 'barter', meaning: '物々交換'},
    {word: 'precision', meaning: '精密な'},
    {word: 'kerosene', meaning: '灯油'},
    {word: 'quarrel', meaning: '口喧嘩'},
    {word: 'evaporate', meaning: '蒸発する'},
    {word: 'swear', meaning: '誓う'},
    {word: 'swear', meaning: '罵る'},
    {word: 'drizzle', meaning: '霧雨'},
    {word: 'obscure', meaning: 'はっきりしない'},
    {word: 'condense', meaning: '濃縮する、要約する'},
    {word: 'charge', meaning: '請求する'},
    {word: 'undermine', meaning: '蝕む'},
    {word: 'pristine', meaning: '損なわれていない'},
    {word: 'resolute', meaning: '断固とした'},
    {word: 'anatomy', meaning: '解剖学'},
    {word: 'glorious', meaning: '素晴らしい'},
    {word: 'shabby', meaning: 'みずぼらしい'},
    {word: 'starch', meaning: 'でんぷん'},
    {word: 'optimist', meaning: '楽天家'},
    {word: 'subsistence', meaning: '生存'},
    {word: 'breeze', meaning: 'そよ風'},
    {word: 'bulletin', meaning: '掲示'},
    {word: 'basin', meaning: '盆地'},
    {word: 'indignant', meaning: '憤慨した'},
    {word: 'humane', meaning: '慈悲深い'},
    {word: 'faint', meaning: '卒倒する'},
    {word: 'ferment', meaning: '発酵させる'},
    {word: 'slim', meaning: 'わずかな'},
    {word: 'discern', meaning: '見分ける'},
    {word: 'impermeable', meaning: '水や光などを通さない'},
    {word: 'brink', meaning: '縁、際'},
    {word: 'configuration', meaning: '配置'},
    {word: 'resent', meaning: '憤慨する'},
    {word: 'sovereign', meaning: '主権者'},
    {word: 'contemplate', meaning: '熟考する'},
    {word: 'frantic', meaning: '熱狂した'},
    {word: 'arid', meaning: '乾燥した'},
    {word: 'combustible', meaning: '可燃性の'},
    {word: 'estuary', meaning: '河口'},
    {word: 'statutory', meaning: '法定の'},
    {word: 'demanding', meaning: 'きつい'},
    {word: 'flora', meaning: '植物相'},
    {word: 'contaminate', meaning: '汚染する'},
    {word: 'dormant', meaning: '(火山が)活動休止中の'},
    {word: 'deposition', meaning: '堆積作用'},
    {word: 'scrutiny', meaning: '精密な調査'},
    {word: 'quiescent', meaning: '無活動の、静止した'},
    {word: 'cave', meaning: '洞窟'},
    {word: 'flammable', meaning: '可燃性の'},
    {word: 'improvise', meaning: '即興で演奏する'},
    {word: 'granite', meaning: '花崗岩'},
    {word: 'integrity', meaning: '高潔な'},
    {word: 'enzyme', meaning: '酵素'},
    {word: 'viscosity', meaning: '粘着性の'},
    {word: 'glue', meaning: '接着剤'},
    {word: 'Intentionally', meaning: '意図的に'},
    {word: 'rodent', meaning: 'ネズミやウサギなどの齧歯動物'},
    {word: 'weep', meaning: '泣く'},
    {word: 'aerial', meaning: '空中の'},
    {word: 'statute', meaning: '法令'},
    {word: 'bleed', meaning: '血が出る'},
    {word: 'peculiar', meaning: '固有の'},
    {word: 'assert', meaning: '主張する'},
    {word: 'dictator', meaning: '独裁者'},
    {word: 'cactus', meaning: 'サボテン'},
    {word: 'abduction', meaning: '誘拐'},
    {word: 'primordial', meaning: '原始の'},
    {word: 'strait', meaning: '海峡'},
    {word: 'optical', meaning: '視覚の、光学の'},
    {word: 'Frigid Zone', meaning: '寒帯'},
    {word: 'hibernate', meaning: '冬眠する'},
    {word: 'figurative', meaning: '比喩的な'},
    {word: 'autonomy', meaning: '自律性,'},
    {word: 'shed', meaning: '落とす'},
    {word: 'delinquent', meaning: '非行の'},
    {word: 'readily', meaning: '快く、素早く'},
    {word: 'eligible', meaning: '資格のある'},
    {word: 'validity', meaning: '妥当性'},
    {word: 'coarse', meaning: 'きめの粗い'},
    {word: 'intimate', meaning: '熟知した、親密な'},
    {word: 'edible', meaning: '食べられる'},
    {word: 'sediment', meaning: '堆積物、沈殿物'},
    {word: 'nostril', meaning: '鼻孔'},
    {word: 'candid', meaning: '公平な'},
    {word: 'judicial', meaning: '司法の'},
    {word: 'barley', meaning: '大麦'},
    {word: 'onset', meaning: '始まり'},
    {word: 'seemingly', meaning: 'うわべだけの'},
    {word: 'zip code', meaning: '郵便番号'},
    {word: 'steep', meaning: '険しい'},
    {word: 'lavish', meaning: '気前の良い'},
    {word: 'accountant', meaning: '会計士'},
    {word: 'reap', meaning: '収穫する'},
    {word: 'retina', meaning: '網膜'},
    {word: 'hare', meaning: '野うさぎ'},
    {word: 'vapor', meaning: '蒸気'},
    {word: 'daring', meaning: '大胆な'},
    {word: 'coward', meaning: '臆病者'},
    {word: 'vice versa', meaning: '逆に'},
    {word: 'cedar', meaning: 'ヒマラヤすぎ'},
    {word: 'interstate', meaning: '州間の'},
    {word: 'casualty', meaning: '災害'},
    {word: 'thaw', meaning: '解ける、和らぐ'},
    {word: 'ingenuity', meaning: '創意'},
    {word: 'brood', meaning: '卵を抱く'},
    {word: 'airbone', meaning: '浮遊して'},
    {word: 'specimen', meaning: '標本'},
    {word: 'amphibian', meaning: '両性動物,両性戦機'},
    {word: 'epicenter', meaning: '震央'},
    {word: 'condemn', meaning: '非難する'},
    {word: 'vague', meaning: '曖昧な'},
    {word: 'census', meaning: '国勢調査'},
    {word: 'heave', meaning: '持ち上げる'},
    {word: 'condensation', meaning: '凝結'},
    {word: 'arable', meaning: '耕作に適した'},
    {word: 'colloquial', meaning: '口語的な'},
    {word: 'indict', meaning: '起訴する'},
    {word: 'squirrel', meaning: 'リス'},
    {word: 'submersible', meaning: '潜水艦'},
    {word: 'vicious', meaning: '悪い'},
    {word: 'biosphere', meaning: '生物圏'},
    {word: 'vogue', meaning: '流行'},
    {word: 'expenditure', meaning: '支出'},
    {word: 'minute', meaning: '詳細な'},
    {word: 'convex', meaning: '凸面'},
    {word: 'clam', meaning: '二枚貝'},
    {word: 'ituition', meaning: '直感'},
    {word: 'pact', meaning: '条約'},
    {word: 'dwarf', meaning: '小さく見せる'},
    {word: 'trunk', meaning: '木の幹'},
    {word: 'dorsal', meaning: '背面にある'},
    {word: 'cobblestone street', meaning: '石で舗装された道路'},
    {word: 'tilt', meaning: '傾かせる'},
    {word: 'catalyst', meaning: '触媒'},
    {word: 'advent', meaning: '到着'},
    {word: 'predatory', meaning: '捕食性の'},
    {word: 'sensible', meaning: '懸命な'},
    {word: 'brisk', meaning: 'きびきびした'},
    {word: 'fungus', meaning: '菌類'},
    {word: 'infinite', meaning: '無数の'},
    {word: 'oak', meaning: 'オーク、ドングリが成る木'},
    {word: 'sting', meaning: '刺す'},
    {word: 'reasoning', meaning: '理論'},
    {word: 'intangible', meaning: '無形の'},
    {word: 'gear', meaning: '装備'},
    {word: 'twig', meaning: '小枝'},
    {word: 'disorder', meaning: '無秩序'},
    {word: 'ranch', meaning: '牧場'},
    {word: 'tract', meaning: '土地'},
    {word: 'seize', meaning: '奪う'},
    {word: 'dreadful', meaning: '恐ろしい'},
    {word: 'terrestrial', meaning: '陸生の、地球の'},
    {word: 'excavate', meaning: '発掘する'},
    {word: 'chill', meaning: '寒さ'},
    {word: 'limb', meaning: '手足'},
    {word: 'dim', meaning: '霞んだ'},
    {word: 'migrate', meaning: '移住する、渡る'},
    {word: 'congest', meaning: '混雑する'},
    {word: 'dairy', meaning: '乳製品'},
    {word: 'stare', meaning: '見つめる'},
    {word: 'customary', meaning: '習慣的な'},
    {word: 'acting', meaning: '代理の'},
    {word: 'Temperate Zone', meaning: '温帯'},
    {word: 'injustice', meaning: '不法の'},
    {word: 'rub', meaning: '擦る'},
    {word: 'fabricate', meaning: 'でっち上げる'},
    {word: 'overlook', meaning: '見逃す、見渡す'},
    {word: 'peasant', meaning: '農民'},
    {word: 'prerequisite', meaning: '必須条件'},
    {word: 'collide', meaning: '衝突する'},
    {word: 'lunatic', meaning: '狂気じみた'},
    {word: 'ballot', meaning: '投票(する）'},
    {word: 'carbohydrate', meaning: '炭水化物'},
    {word: 'livestock', meaning: '家畜'},
    {word: 'absurd', meaning: 'バカバカしい'},
    {word: 'weather', meaning: '風化させる'},
    {word: 'urbane', meaning: '都会風の、垢抜けした'},
    {word: 'tremble', meaning: '震える'},
    {word: 'aviation', meaning: '航空'},
    {word: 'moss', meaning: 'コケ'},
    {word: 'infrared rays', meaning: '赤外線'},
    {word: 'courtesy', meaning: '特別扱い'},
    {word: 'snail', meaning: 'カタツムリ'},
    {word: 'lament', meaning: '悲しむ'},
    {word: 'consciousness', meaning: '意識'},
    {word: 'confront', meaning: '立ち向かう'},
    {word: 'beg', meaning: '願う'},
    {word: 'sled', meaning: 'そり'},
    {word: 'dignify', meaning: '威厳をつける'},
    {word: 'testify', meaning: '証言する'},
    {word: 'ape', meaning: '類人猿'},
    {word: 'cavity', meaning: '空洞'},
    {word: 'longitude', meaning: '経度'},
    {word: 'gratitude', meaning: '謝意'},
    {word: 'inherit', meaning: '受け継ぐ'},
    {word: 'respiration', meaning: '呼吸'},
    {word: 'gut', meaning: 'はらわた'},
    {word: 'lessen', meaning: '減らす'},
    {word: 'perch', meaning: '(鳥籠などの)止まり木'},
    {word: 'sanctuary', meaning: '自然保護区'},
    {word: 'chore', meaning: '日常の雑用'},
    {word: 'reign', meaning: '統治する'},
    {word: 'anguish', meaning: '苦痛'},
    {word: 'attain', meaning: '手に入れる'},
    {word: 'upset', meaning: 'ダメにする'},
    {word: 'shiver', meaning: '(寒さで)震える'},
    {word: 'pivotal', meaning: '中心となる'},
    {word: 'chronicle', meaning: '年代記'},
    {word: 'peck', meaning: 'ついばむ'},
    {word: 'succesor', meaning: '後継者'},
    {word: 'ankle', meaning: 'くるぶし'},
    {word: 'iceberg', meaning: '氷山'},
    {word: 'usher', meaning: '先駆けとなる、到来を告げる'},
    {word: 'banish', meaning: '追放する'},
    {word: 'bimonthly', meaning: '隔月に'},
    {word: 'fatigue', meaning: '疲れ'},
    {word: 'omnivore', meaning: '雑食生の動物'},
    {word: 'tremor', meaning: '(声の)震え,(地面などの)震動'},
    {word: 'fauna', meaning: '動物相'},
    {word: 'verbal', meaning: '言葉の'},
    {word: 'crustacean', meaning: '甲殻類'},
    {word: 'tongue', meaning: '舌、言語'},
    {word: 'humiliate', meaning: '恥をかかす'},
    {word: 'enure', meaning: '確実にする'},
    {word: 'eminent', meaning: '素晴らしい'},
    {word: 'beak', meaning: 'くちばし'},
    {word: 'exempt', meaning: '免除する'},
    {word: 'vegetation', meaning: '植生'},
    {word: 'hatch', meaning: '孵化させる'},
    {word: 'weary', meaning: '疲れ果てた'},
    {word: 'wasp', meaning: 'スズメバチ'},
    {word: 'detach', meaning: '分離する'},
    {word: 'horticulture', meaning: '園芸'},
    {word: 'inagurate', meaning: '就任する'},
    {word: 'opaque', meaning: '不透明な'},
    {word: 'rally', meaning: '集会'},
    {word: 'lung', meaning: '肺'},
    {word: 'immigrate', meaning: '移住してくる'},
    {word: 'outskirts', meaning: '郊外'},
    {word: 'incline', meaning: '~したいと思う'},
    {word: 'hatred', meaning: '憎しみ'},
    {word: 'prevalent', meaning: '蔓延している'},
    {word: 'digit', meaning: '数字'},
    {word: 'competent', meaning: '有能な'},
    {word: 'soak', meaning: '浸す'},
    {word: 'transfusion', meaning: '輸血'},
    {word: 'terra', meaning: '土、大地'},
    {word: 'queue', meaning: '列'},
    {word: 'steer', meaning: '操縦する'},
    {word: 'breadth', meaning: '幅'},
    {word: 'damp', meaning: '湿気のある'},
    {word: 'squid', meaning: 'イカ'},
    {word: 'nest', meaning: '巣'},
    {word: 'pending', meaning: '未解決の'},
    {word: 'vertebrate', meaning: '脊椎動物'},
    {word: 'facet', meaning: '物事の一部'},
    {word: 'burst', meaning: '充満する'},
    {word: 'prudent', meaning: '賢明な'},
    {word: 'artisan', meaning: '職人'},
    {word: 'scorn', meaning: '嘲笑する'},
    {word: 'coalition', meaning: '連合'},
    {word: 'chroonological order', meaning: '年代順'},
    {word: 'commonplace', meaning: 'ありふれた'},
    {word: 'entomology', meaning: '昆虫学'},
    {word: 'discharge', meaning: '排出する'},
    {word: 'porous', meaning: '多孔性の'},
    {word: 'discreet', meaning: '思慮深い'},
    {word: 'affirm', meaning: '主張する'},
    {word: 'hawk', meaning: 'タカ'},
    {word: 'extract', meaning: '抽出する'},
    {word: 'endow', meaning: '授ける'},
    {word: 'trust', meaning: '追いやる'},
    {word: 'wholesale', meaning: '卸売り'},
    {word: 'utility', meaning: '効用'},
    {word: 'probe', meaning: '探検する'},
    {word: 'feeble', meaning: '(体が)弱い、(光や音が)微かな'},
    {word: 'fractured', meaning: '粉々になった'},
];

// ============ 設定・状態管理 ============
const MISSED_BANK_KEY = 'eq_missed_bank_v1';
const STAR_KEY = 'eq_star_v1';
const QUIZ_TIME_LIMIT_MS = 5000;
const SOUND_ENABLED = false;

const storage = {
    get(key, fallback) {
        try { const v = JSON.parse(localStorage.getItem(key)); return v ?? fallback; } catch { return fallback; }
    },
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.warn(`Failed to persist ${key}`, error);
        }
    }
};
let STARRED = storage.get(STAR_KEY, {}); // { id: true }
let MISSED_BANK = storage.get(MISSED_BANK_KEY, []); // [{word, meaning}]

// セッション状態
let currentWordIndex = 0;
let score = 0;
let shuffledWords = [];
let currentWordList = [];
let missedWords = []; // セッションで間違えた単語
let selectedWordCount = 0;
let timer = null;

// ============ 共通ユーティリティ ============
function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function getRandomChoices(correctMeaning) {
    const otherMeanings = words
        .filter(w => w.meaning !== correctMeaning)
        .map(w => w.meaning);
    const randomMeanings = shuffleArray(otherMeanings).slice(0, 3);
    return shuffleArray([...randomMeanings, correctMeaning]);
}

function wordId(entry) { return `${entry.word}｜${entry.meaning}`; }

function reportError(error, context='') {
    console.error(context || 'Unexpected error', error);
    const container = document.getElementById('quiz-container');
    if (container) {
        container.innerHTML = `
            <div class="error-state">
                <h2>エラーが発生しました</h2>
                <p>${context || '処理を完了できませんでした。'}<br>ページを再読み込みしてください。</p>
            </div>
        `;
    }
}

function setActiveNav(mode) {
    document.querySelectorAll('.header-link').forEach(link => {
        const isActive = link.dataset.nav === mode;
        link.classList.toggle('is-active', isActive);
        link.setAttribute('aria-current', isActive ? 'page' : 'false');
    });
    const title = document.getElementById('nav-home');
    if (title) {
        const isHome = mode === 'home';
        title.classList.toggle('is-active', isHome);
        title.setAttribute('aria-current', isHome ? 'page' : 'false');
    }
}

function createToolButton(label, handler) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'tool-btn';
    btn.textContent = label;
    if (handler) {
        btn.addEventListener('click', handler);
    }
    return btn;
}

function shuffleWords() {
    const allWords = shuffleArray(words);
    if (selectedWordCount > 0) {
        shuffledWords = allWords.slice(0, selectedWordCount);
    } else {
        shuffledWords = allWords;
    }
}

function applyTheme() {
    document.documentElement.setAttribute('data-theme', 'light');
}

function vibrate(ms=20){ try{ if (navigator.vibrate) navigator.vibrate(ms); }catch{} }

let audioCtx = null;
function beep(freq=880, time=0.08, type='sine'){
    if (!SOUND_ENABLED) return;
    try {
        audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
        const o = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        o.type = type; o.frequency.value = freq; o.connect(g); g.connect(audioCtx.destination);
        g.gain.setValueAtTime(0.0001, audioCtx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.2, audioCtx.currentTime + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + time);
        o.start(); o.stop(audioCtx.currentTime + time);
    } catch {}
}

function displayWord() {
    try {
        const currentWord = shuffledWords[currentWordIndex];
        if (!currentWord) throw new Error('currentWord is undefined');
        document.getElementById('word').textContent = currentWord.word;
        document.getElementById('question-count').textContent = 
            `問題: ${currentWordIndex + 1}/${shuffledWords.length}`;
        document.getElementById('score').textContent = `スコア: ${score}`;
        
        // ツール群（ホーム・スター）更新
        const tools = document.getElementById('word-tools');
        if (tools) {
            tools.innerHTML = '';
            const id = wordId(currentWord);
            const starred = !!STARRED[id];
            const homeBtn = createToolButton('ホームに戻る', showHomeScreen);
            const flashBtn = createToolButton('フラッシュカードで確認', () => {
                const baseList = currentWordList.length ? currentWordList.slice() : shuffledWords.slice();
                startFlashcards({ list: baseList, source: 'current', shuffle: false });
            });
            const starBtn = createToolButton(starred ? 'スター済' : 'スター登録', () => {
                const now = !!STARRED[id];
                if (now) { delete STARRED[id]; } else { STARRED[id] = true; }
                try { storage.set(STAR_KEY, STARRED); } catch (error) { console.warn('スター情報の保存に失敗しました', error); }
                displayWord();
            });
            starBtn.id = 'btn-star';
            if (starred) starBtn.classList.add('is-starred');
            tools.append(homeBtn, flashBtn, starBtn);
        }
        
        // 既存のタイムバーを削除
        const existingTimerBar = document.querySelector('.timer-bar-container');
        if (existingTimerBar) {
            existingTimerBar.remove();
        }
        
        const choices = getRandomChoices(currentWord.meaning);
        const choicesContainer = document.getElementById('choices');
        if (!choicesContainer) throw new Error('choices container not found');
        choicesContainer.innerHTML = '';
        
        // 新しいタイムバーを追加
        const timerBarHTML = `
            <div class="timer-bar-container">
                <div class="timer-bar" id="timer-bar"></div>
            </div>
        `;
        choicesContainer.insertAdjacentHTML('beforebegin', timerBarHTML);
        
        choices.forEach(choice => {
            const button = document.createElement('button');
            button.className = 'choice-btn';
            button.textContent = choice;
            button.addEventListener('click', () => checkAnswer(choice, button));
            choicesContainer.appendChild(button);
        });

        const result = document.getElementById('result');
        if (result) result.textContent = '';
        
        startTimer();
    } catch (error) {
        reportError(error, '問題の表示に失敗しました。');
    }
}

function showResults() {
    try {
        const container = document.querySelector('.quiz-container');
        if (!container) throw new Error('結果表示用のコンテナが見つかりません');
        const accuracy = shuffledWords.length ? Math.round((score / shuffledWords.length) * 100) : 0;

        container.innerHTML = `
            <h2>テスト結果</h2>
            <div class="result-summary">
                <p>スコア: ${score}/${shuffledWords.length} (${accuracy}%)</p>
            </div>
            ${missedWords.length > 0 ? `
                <div class="missed-words">
                    <h3>間違えた単語</h3>
                    <div class="missed-words-list">
                        ${missedWords.map(word => `
                            <div class="missed-word-item">
                                <span class="word">${word.word}</span>
                                <span class="meaning">${word.meaning}</span>
                            </div>
                        `).join('')}
                    </div>
                    <button id="retry-missed" class="retry-btn">
                        間違えた単語でもう一度テストする
                    </button>
                </div>
            ` : `
                <div class="perfect-score">
                    <p>完璧です！全問正解おめでとうございます！</p>
                </div>
            `}
            <button id="retry-all" class="retry-btn">最初からやり直す</button>
            <button id="btn-results-flash" class="retry-btn">フラッシュカードで確認する</button>
            <button id="go-review" class="retry-btn">復習モードへ</button>
            <button id="results-home" class="retry-btn">ホームへ戻る</button>
        `;

        setActiveNav('quiz');

        const retryMissedBtn = document.getElementById('retry-missed');
        if (retryMissedBtn) {
            retryMissedBtn.addEventListener('click', () => {
                try {
                    const retryList = shuffleArray([...missedWords]);
                    container.innerHTML = `
                        <div class="word-display">
                            <p id="word"></p>
                        </div>
                        <div class="choices-container" id="choices">
                        </div>
                        <div class="result" id="result"></div>
                        <div class="progress">
                            <span id="score">スコア: 0</span>
                            <span id="question-count">問題: 0/0</span>
                        </div>
                    `;

                    shuffledWords = retryList.slice();
                    currentWordList = retryList.slice();
                    selectedWordCount = retryList.length;
                    missedWords = [];
                    currentWordIndex = 0;
                    score = 0;
                    setActiveNav('quiz');
                    displayWord();
                } catch (error) {
                    reportError(error, '間違えた単語での再挑戦に失敗しました。');
                }
            });
        }

        document.getElementById('retry-all')?.addEventListener('click', () => {
            showHomeScreen();
        });

        document.getElementById('go-review')?.addEventListener('click', () => {
            showReviewHub();
        });

        const flashResultsBtn = document.getElementById('btn-results-flash');
        if (flashResultsBtn) {
            flashResultsBtn.addEventListener('click', () => {
                const base = missedWords.length ? missedWords : currentWordList;
                if (!base.length) {
                    showHomeScreen();
                    return;
                }
                startFlashcards({ list: base.slice(), source: 'results', shuffle: false });
            });
        }

        document.getElementById('results-home')?.addEventListener('click', showHomeScreen);
    } catch (error) {
        reportError(error, 'テスト結果の表示に失敗しました。');
    }
}

function checkAnswer(selectedAnswer, selectedButton) {
    try {
        clearTimeout(timer);
        const timerBar = document.getElementById('timer-bar');
        if (timerBar) {
            timerBar.style.transition = 'none';
            timerBar.style.width = '0';
        }

        const current = shuffledWords[currentWordIndex];
        if (!current) throw new Error('回答対象の単語が見つかりません');
        const correctAnswer = current.meaning;
        const allButtons = document.querySelectorAll('.choice-btn');

        allButtons.forEach(button => {
            button.disabled = true;
            if (button.textContent === correctAnswer) {
                button.classList.add('correct');
            }
        });

        if (selectedAnswer === correctAnswer) {
            document.getElementById('result').textContent = '正解！';
            document.getElementById('result').className = 'result correct';
            score++;
            beep(1040, 0.06, 'sine');
            vibrate(10);
        } else {
            if (selectedButton) selectedButton.classList.add('incorrect');
            document.getElementById('result').textContent = '不正解...';
            document.getElementById('result').className = 'result incorrect';
            missedWords.push(current);
            MISSED_BANK.push(current);
            try { storage.set(MISSED_BANK_KEY, MISSED_BANK.slice(-500)); } catch (error) {
                console.warn('Failed to save missed bank', error);
            }
            beep(220, 0.1, 'square');
            vibrate(20);
        }

        document.getElementById('score').textContent = `スコア: ${score}`;

        setTimeout(() => {
            currentWordIndex++;
            if (currentWordIndex >= shuffledWords.length) {
                showResults();
            } else {
                displayWord();
            }
        }, 1000);
    } catch (error) {
        reportError(error, '回答処理中にエラーが発生しました。');
    }
}

function startTimer() {
    try {
        const timerBar = document.getElementById('timer-bar');
        if (!timerBar) return;

        timerBar.classList.remove('warning', 'danger');
        const LIMIT = QUIZ_TIME_LIMIT_MS;
        timerBar.style.transition = `width ${LIMIT}ms linear`;
        timerBar.style.width = '100%';

        if (timer) {
            clearTimeout(timer);
        }

        setTimeout(() => {
            if (timerBar) timerBar.style.width = '0%';
        }, 50);

        setTimeout(() => {
            if (timerBar) timerBar.classList.add('warning');
        }, LIMIT * 0.6);
        
        setTimeout(() => {
            if (timerBar) timerBar.classList.add('danger');
        }, LIMIT * 0.8);

        timer = setTimeout(() => {
            try {
                const current = shuffledWords[currentWordIndex];
                if (!current) throw new Error('タイマー終了時の単語が取得できません');
                const correctAnswer = current.meaning;
                const allButtons = document.querySelectorAll('.choice-btn');

                allButtons.forEach(button => {
                    button.disabled = true;
                    if (button.textContent === correctAnswer) {
                        button.classList.add('incorrect');
                    }
                });

                const result = document.getElementById('result');
                if (result) {
                    result.textContent = '時間切れ...';
                    result.className = 'result incorrect';
                }
                missedWords.push(current);
                MISSED_BANK.push(current);
                try { storage.set(MISSED_BANK_KEY, MISSED_BANK.slice(-500)); } catch (error) {
                    console.warn('Failed to persist missed bank after timeout', error);
                }
                beep(180, 0.12, 'triangle');
                vibrate(30);

                setTimeout(() => {
                    currentWordIndex++;
                    if (currentWordIndex >= shuffledWords.length) {
                        showResults();
                    } else {
                        displayWord();
                    }
                }, 1000);
            } catch (error) {
                reportError(error, 'タイマー処理中にエラーが発生しました。');
            }
        }, LIMIT);
    } catch (error) {
        reportError(error, 'タイマーの開始に失敗しました。');
    }
}

// ======= 画面: ホーム =======
function showHomeScreen() {
    try {
        const container = document.getElementById('quiz-container');
        if (!container) throw new Error('quiz-container not found');
        container.innerHTML = `
            <div class="home-screen">
                <h2>単語学習をはじめよう</h2>
                <div class="word-count-options">
                    <button class="word-count-btn" data-count="10"><span class="count">10</span><span class="label">クイック</span></button>
                    <button class="word-count-btn" data-count="30"><span class="count">30</span><span class="label">集中</span></button>
                    <button class="word-count-btn" data-count="50"><span class="count">50</span><span class="label">がっつり</span></button>
                    <button class="word-count-btn" data-count="100"><span class="count">100</span><span class="label">長時間</span></button>
                </div>
                <div class="word-count-options">
                    <button class="word-count-btn" id="btn-flash">🪄 フラッシュカード</button>
                    <button class="word-count-btn" id="btn-review-hub">📚 復習モード</button>
                </div>
                <div class="word-count-options">
                    <button class="word-count-btn" id="btn-continue">⏩ 前回の続き</button>
                </div>
                <p class="total-words">総単語数: ${words.length}語 / スター: ${Object.keys(STARRED).length} / 過去ミス: ${MISSED_BANK.length}</p>
            </div>
        `;
        setActiveNav('home');

        const buttons = document.querySelectorAll('.word-count-btn[data-count]');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                selectedWordCount = parseInt(button.dataset.count);
                startQuiz();
            });
        });

        document.getElementById('btn-review-hub')?.addEventListener('click', showReviewHub);
        document.getElementById('btn-flash')?.addEventListener('click', () => startFlashcards());
        document.getElementById('btn-continue')?.addEventListener('click', () => startQuiz());
    } catch (error) {
        reportError(error, 'ホーム画面の表示に失敗しました。');
    }
}

// ======= 画面: クイズ =======
function startQuiz() {
    try {
        const container = document.getElementById('quiz-container');
        if (!container) throw new Error('quiz-container not found');
        container.innerHTML = `
            <div class="word-display">
                <p id="word"></p>
            </div>
            <div class="word-tools" id="word-tools"></div>
            <div class="choices-container" id="choices">
            </div>
            <div class="result" id="result"></div>
            <div class="progress">
                <span id="score">スコア: 0</span>
                <span id="question-count">問題: 0/0</span>
            </div>
        `;

        currentWordIndex = 0;
        score = 0;
        missedWords = [];
        shuffleWords();
        currentWordList = shuffledWords.slice();
        setActiveNav('quiz');
        displayWord();
    } catch (error) {
        reportError(error, '単語テストの開始に失敗しました。');
    }
}

// ======= 画面: 復習ハブ =======
function showReviewHub() {
    try {
        const container = document.getElementById('quiz-container');
        if (!container) throw new Error('quiz-container not found');
        container.innerHTML = `
            <div class="home-screen">
                <h2>復習する項目を選択</h2>
                <div class="word-count-options">
                    <button class="word-count-btn" id="btn-review-missed">ミスの単語をテスト (${MISSED_BANK.length})</button>
                    <button class="word-count-btn" id="btn-review-missed-flash">ミスの単語をカードで見る (${MISSED_BANK.length})</button>
                </div>
                <div class="word-count-options">
                    <button class="word-count-btn" id="btn-review-star">スター単語をテスト (${Object.keys(STARRED).length})</button>
                    <button class="word-count-btn" id="btn-review-star-flash">スター単語をカードで見る (${Object.keys(STARRED).length})</button>
                </div>
                <div class="word-count-options">
                    <button class="word-count-btn" id="btn-clear-missed">過去のミスをクリア</button>
                    <button class="word-count-btn" id="btn-back-home">ホームへ</button>
                </div>
            </div>
        `;
        setActiveNav('review');

        document.getElementById('btn-review-missed')?.addEventListener('click', () => {
            if (!MISSED_BANK.length) return alert('過去のミスはありません');
            startQuizFromList(shuffleArray([...MISSED_BANK]));
        });
        document.getElementById('btn-review-missed-flash')?.addEventListener('click', () => {
            if (!MISSED_BANK.length) return alert('過去のミスはありません');
            startFlashcards('missed');
        });
        document.getElementById('btn-review-star')?.addEventListener('click', () => {
            const list = words.filter(w => STARRED[wordId(w)]);
            if (list.length === 0) return alert('スターがありません');
            startQuizFromList(list);
        });
        document.getElementById('btn-review-star-flash')?.addEventListener('click', () => {
            const list = words.filter(w => STARRED[wordId(w)]);
            if (list.length === 0) return alert('スターがありません');
            startFlashcards('star');
        });
        document.getElementById('btn-clear-missed')?.addEventListener('click', () => {
            if (!confirm('過去のミスをすべて削除しますか？')) return;
            MISSED_BANK = [];
            try { storage.set(MISSED_BANK_KEY, MISSED_BANK); } catch (error) { console.warn('Failed to clear missed bank', error); }
            showReviewHub();
        });
        document.getElementById('btn-back-home')?.addEventListener('click', showHomeScreen);
    } catch (error) {
        reportError(error, '復習メニューの表示に失敗しました。');
    }
}

function startQuizFromList(list) {
    try {
        const container = document.getElementById('quiz-container');
        if (!container) throw new Error('quiz-container not found');
        container.innerHTML = `
            <div class="word-display">
                <p id="word"></p>
            </div>
            <div class="word-tools" id="word-tools"></div>
            <div class="choices-container" id="choices"></div>
            <div class="result" id="result"></div>
            <div class="progress">
                <span id="score">スコア: 0</span>
                <span id="question-count">問題: 0/0</span>
            </div>
        `;
        const dataset = list.slice();
        currentWordList = dataset.slice();
        shuffledWords = shuffleArray(dataset);
        selectedWordCount = dataset.length;
        currentWordIndex = 0; score = 0; missedWords = [];
        setActiveNav('quiz');
        displayWord();
    } catch (error) {
        reportError(error, '復習テストの開始に失敗しました。');
    }
}

// ======= 画面: フラッシュカード =======
let flashIndex = 0, flashList = [];
let flashRevealed = false;
function startFlashcards(options = {}) {
    try {
        let source = 'all';
        let list = null;
        let shouldShuffle = true;

        if (typeof options === 'string') {
            source = options;
        } else {
            source = options.source ?? 'all';
            list = options.list ?? null;
            if (typeof options.shuffle === 'boolean') shouldShuffle = options.shuffle;
        }

        if (list && list.length) {
            flashList = list.slice();
        } else if (source === 'star') {
            flashList = words.filter(w => STARRED[wordId(w)]);
        } else if (source === 'missed') {
            flashList = [...MISSED_BANK];
        } else {
            const base = shuffleArray([...words]);
            const count = selectedWordCount > 0 ? selectedWordCount : 30;
            flashList = base.slice(0, count);
        }

        if (!flashList.length) {
            alert('表示できるフラッシュカードがありません');
            return;
        }

        if (shouldShuffle) {
            flashList = shuffleArray(flashList);
        }

        currentWordList = flashList.slice();
        selectedWordCount = flashList.length;
        flashIndex = 0;
        flashRevealed = false;

        const container = document.getElementById('quiz-container');
        if (!container) throw new Error('quiz-container not found');
        container.innerHTML = `
            <div class="word-display">
                <p id="word"></p>
            </div>
            <div class="word-tools" id="word-tools"></div>
            <div class="choices-container" id="flash-area"></div>
            <div class="progress">
                <span id="score">カード: 0</span>
                <span id="question-count">0/0</span>
            </div>
        `;
        setActiveNav('flashcards');
        renderFlash();
    } catch (error) {
        reportError(error, 'フラッシュカードの表示に失敗しました。');
    }
}

function renderFlash(){
    try {
        if (flashIndex >= flashList.length) { showHomeScreen(); return; }
        const w = flashList[flashIndex];
        if (!w) throw new Error('flashcard data missing');
        const wordLabel = document.getElementById('word');
        if (!wordLabel) throw new Error('word label not found');
        wordLabel.textContent = w.word;
        const tools = document.getElementById('word-tools');
        if (!tools) throw new Error('tool container not found');
        tools.innerHTML = '';
        const id = wordId(w);
        const homeBtn = createToolButton('ホームに戻る', showHomeScreen);
        const quizBtn = createToolButton('このセットでテスト', () => startQuizFromList(flashList.slice()));
        const starBtn = createToolButton(STARRED[id] ? 'スター済' : 'スター登録', () => {
            if (STARRED[id]) {
                delete STARRED[id];
            } else {
                STARRED[id] = true;
            }
            try { storage.set(STAR_KEY, STARRED); } catch (error) { console.warn('スター情報の保存に失敗しました', error); }
            renderFlash();
        });
        if (STARRED[id]) starBtn.classList.add('is-starred');
        tools.append(homeBtn, quizBtn, starBtn);

        const area = document.getElementById('flash-area');
        if (!area) throw new Error('flash area not found');
        area.innerHTML = '';
        const reveal = document.createElement('button'); reveal.className = 'retry-btn'; reveal.textContent = flashRevealed ? w.meaning : '意味を表示';
        reveal.onclick = () => { flashRevealed = true; renderFlash(); };
        area.appendChild(reveal);

        if (flashRevealed) {
            const row = document.createElement('div');
            row.style.display = 'grid'; row.style.gridTemplateColumns = '1fr 1fr'; row.style.gap='0.6rem'; row.style.marginTop='0.6rem';
            const btnAgain = document.createElement('button'); btnAgain.className = 'retry-btn'; btnAgain.textContent = 'まだ';
            btnAgain.onclick = () => { MISSED_BANK.push(w); try { storage.set(MISSED_BANK_KEY, MISSED_BANK.slice(-500)); } catch (error) { console.warn('Failed to save missed bank from flashcards', error); } flashIndex++; flashRevealed=false; renderFlash(); };
            const btnGood = document.createElement('button'); btnGood.className = 'retry-btn'; btnGood.textContent = '覚えた';
            btnGood.onclick = () => { flashIndex++; flashRevealed=false; renderFlash(); };
            row.append(btnAgain, btnGood); area.appendChild(row);
        }
        const countLabel = document.getElementById('question-count');
        if (countLabel) countLabel.textContent = `${flashIndex+1}/${flashList.length}`;
        const scoreLabel = document.getElementById('score');
        if (scoreLabel) scoreLabel.textContent = `カード: ${flashIndex}`;
    } catch (error) {
        reportError(error, 'フラッシュカードの更新に失敗しました。');
    }
}

// ============ 設定UIと初期化 ============
function wireHeader() {
    document.getElementById('nav-home')?.addEventListener('click', () => {
        showHomeScreen();
    });

    const quizNav = document.querySelector('.header-link[data-nav="quiz"]');
    quizNav?.addEventListener('click', () => {
        if (currentWordList.length) {
            startQuizFromList(currentWordList.slice());
            return;
        }
        if (!selectedWordCount) selectedWordCount = 30;
        startQuiz();
    });

    const flashNav = document.querySelector('.header-link[data-nav="flashcards"]');
    flashNav?.addEventListener('click', () => {
        if (currentWordList.length) {
            startFlashcards({ list: currentWordList.slice(), source: 'current', shuffle: false });
        } else {
            startFlashcards({});
        }
    });

    const reviewNav = document.querySelector('.header-link[data-nav="review"]');
    reviewNav?.addEventListener('click', () => showReviewHub());
}

// 初期化
window.onload = () => {
    applyTheme();
    wireHeader();
    showHomeScreen();
};
