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




let currentWordIndex = 0;
let score = 0;
let shuffledWords = [];
let missedWords = []; // 間違えた単語を保存する配列
let selectedWordCount = 0;
let timer = null;
const TIME_PER_QUESTION = 5000; // 5秒

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

function shuffleWords() {
    const allWords = shuffleArray(words);
    if (selectedWordCount > 0) {
        shuffledWords = allWords.slice(0, selectedWordCount);
    } else {
        shuffledWords = allWords;
    }
}

function displayWord() {
    const currentWord = shuffledWords[currentWordIndex];
    document.getElementById('word').textContent = currentWord.word;
    document.getElementById('question-count').textContent = 
        `問題: ${currentWordIndex + 1}/${shuffledWords.length}`;
    document.getElementById('score').textContent = `スコア: ${score}`;
    
    // 既存のタイムバーを削除
    const existingTimerBar = document.querySelector('.timer-bar-container');
    if (existingTimerBar) {
        existingTimerBar.remove();
    }
    
    const choices = getRandomChoices(currentWord.meaning);
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';
    
    // 新しいタイムバーを追加
    const timerBarHTML = `
        <div class="timer-bar-container">
            <div class="timer-bar" id="timer-bar"></div>
        </div>
    `;
    choicesContainer.insertAdjacentHTML('beforebegin', timerBarHTML);
    
    choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.textContent = choice;
        button.addEventListener('click', () => checkAnswer(choice, button));
        choicesContainer.appendChild(button);
    });

    document.getElementById('result').textContent = '';
    
    startTimer();
}

function showResults() {
    const container = document.querySelector('.quiz-container');
    const accuracy = Math.round((score / shuffledWords.length) * 100);
    
    // 一旦HTMLを更新
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
    `;

    // HTMLの更新後にイベントリスナーを設定
    const retryMissedBtn = document.getElementById('retry-missed');
    if (retryMissedBtn) {
        retryMissedBtn.addEventListener('click', () => {
            // quiz-containerを元の状態に戻す
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
            
            shuffledWords = shuffleArray([...missedWords]);
            missedWords = [];
            currentWordIndex = 0;
            score = 0;
            displayWord();
        });
    }

    const retryAllBtn = document.getElementById('retry-all');
    if (retryAllBtn) {
        retryAllBtn.addEventListener('click', () => {
            showHomeScreen(); // 最初からやり直すときはホーム画面に戻る
        });
    }
}

function checkAnswer(selectedAnswer, selectedButton) {
    // タイマーとタイマー関連の要素をクリア
    clearTimeout(timer);
    const timerBar = document.getElementById('timer-bar');
    if (timerBar) {
        timerBar.style.transition = 'none';
        timerBar.style.width = '0';
    }
    
    const correctAnswer = shuffledWords[currentWordIndex].meaning;
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
    } else {
        selectedButton.classList.add('incorrect');
        document.getElementById('result').textContent = '不正解...';
        document.getElementById('result').className = 'result incorrect';
        missedWords.push(shuffledWords[currentWordIndex]);
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
}

function startTimer() {
    const timerBar = document.getElementById('timer-bar');
    if (!timerBar) return;
    
    timerBar.classList.remove('warning', 'danger');
    timerBar.style.transition = `width ${TIME_PER_QUESTION}ms linear`;
    timerBar.style.width = '100%';
    
    if (timer) {
        clearTimeout(timer);
    }
    
    setTimeout(() => {
        if (timerBar) timerBar.style.width = '0%';
    }, 50);

    setTimeout(() => {
        if (timerBar) timerBar.classList.add('warning');
    }, TIME_PER_QUESTION * 0.6);
    
    setTimeout(() => {
        if (timerBar) timerBar.classList.add('danger');
    }, TIME_PER_QUESTION * 0.8);

    timer = setTimeout(() => {
        const correctAnswer = shuffledWords[currentWordIndex].meaning;
        const allButtons = document.querySelectorAll('.choice-btn');
        
        // 時間切れの場合、すべてのボタンを無効化し、正解を赤色で表示
        allButtons.forEach(button => {
            button.disabled = true;
            if (button.textContent === correctAnswer) {
                button.classList.add('incorrect'); // 正解を赤色で表示
            }
        });

        document.getElementById('result').textContent = '時間切れ...';
        document.getElementById('result').className = 'result incorrect';
        missedWords.push(shuffledWords[currentWordIndex]);

        setTimeout(() => {
            currentWordIndex++;
            if (currentWordIndex >= shuffledWords.length) {
                showResults();
            } else {
                displayWord();
            }
        }, 1000);
    }, TIME_PER_QUESTION);
}

// ホーム画面の表示関数を追加
function showHomeScreen() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = `
        <div class="home-screen">
            <h2>テストする単語数を選んでください</h2>
            <div class="word-count-options">
                <button class="word-count-btn" data-count="10">10単語</button>
                <button class="word-count-btn" data-count="30">30単語</button>
                <button class="word-count-btn" data-count="50">50単語</button>
                <button class="word-count-btn" data-count="100">100単語</button>
            </div>
            <p class="total-words">総単語数: ${words.length}語</p>
        </div>
    `;

    // 単語数選択ボタンのイベントリスナーを設定
    const buttons = document.querySelectorAll('.word-count-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            selectedWordCount = parseInt(button.dataset.count);
            startQuiz();
        });
    });
}

// クイズ開始関数を追加
function startQuiz() {
    const container = document.getElementById('quiz-container');
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
    
    currentWordIndex = 0;
    score = 0;
    missedWords = [];
    shuffleWords();
    displayWord();
}

// window.onloadを修正
window.onload = () => {
    showHomeScreen();
}; 
