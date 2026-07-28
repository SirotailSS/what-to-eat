// ============================================
// 数据建设
// ============================================

// 1. 总食材库（合并所有食材，至少30种）
const foodDB = [
    // 荤菜类
    '五花肉', '鸡腿肉', '牛肉片', '羊肉片', '虾仁', '鱿鱼须',
    '排骨', '鸡胸肉', '鸭肉', '鱼肉片', '猪里脊', '牛腩', 
    '鸡翅中', '肥牛卷', '猪肝', '虾滑', '猪大肠',
    // 素菜类
    '土豆', '茄子', '西红柿', '西兰花', '青椒', '洋葱', 
    '胡萝卜', '白菜', '菠菜', '豆芽', '蘑菇', '金针菇',
    '莲藕', '笋片', '黄瓜', '芹菜', '豌豆', '玉米粒',
    // 蛋/豆制品
    '鸡蛋', '豆腐', '腐竹', '千张'
];

// 3. 暗黑调料数据库（至少8种，用于彩蛋机制）
const magicDB = [
    '草莓',
    '巧克力酱',
    '咖啡粉',
    '芝士片',
    '薄荷糖',
    '柠檬汁',
    '芒果粒',
    '蓝莓酱',
    '棉花糖',
    '榴莲泥'
];

// 4. 烹饪方式数据库（至少10种，带Emoji和提示）
const cookDB = [
    { method: '爆炒', emoji: '🔥', tip: '大火快熟' },
    { method: '红烧', emoji: '🍲', tip: '慢炖入味' },
    { method: '清蒸', emoji: '♨️', tip: '原汁原味' },
    { method: '油炸', emoji: '🍗', tip: '外酥里嫩' },
    { method: '凉拌', emoji: '🥗', tip: '清爽开胃' },
    { method: '烧烤', emoji: '🥩', tip: '焦香四溢' },
    { method: '炖汤', emoji: '🥣', tip: '营养暖胃' },
    { method: '煎制', emoji: '🍳', tip: '两面金黄' },
    { method: '焖煮', emoji: '🍛', tip: '软烂入味' },
    { method: '干煸', emoji: '🌶️', tip: '麻辣干香' },
    { method: '水煮', emoji: '🥘', tip: '鲜嫩滑爽' },
    { method: '酱爆', emoji: '🧄', tip: '酱香浓郁' },
    { method: '刺身', emoji: '🍣', tip: '生食原味' }
];

// ============================================
// 核心逻辑编写
// ============================================

// 1. 基础随机抽取函数
function pickRandom(arr) {
    if (!arr || arr.length === 0) {
        console.error('数组为空或未定义！');
        return null;
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// 2. 配菜生成器主函数（方案三：从总食材库中取两种不同的食材）
function generateDish() {
    // ===== 【刺身彩蛋】2%概率触发：随机荤菜变刺身 =====
    if (Math.random() < 0.02) {
        const meatItems = ['五花肉', '鸡腿肉', '牛肉片', '羊肉片', '虾仁', '鱿鱼须', 
                          '排骨', '鸡胸肉', '鸭肉', '鱼肉片', '猪里脊', '牛腩', 
                          '鸡翅中', '肥牛卷', '猪肝', '虾滑', '猪大肠'];
        const selectedMeat = pickRandom(meatItems);
        console.log('🎉 刺身彩蛋触发！' + selectedMeat + '刺身！');
        return {
            main: selectedMeat,
            veg: '无',
            cook: { method: '刺身', emoji: '🍣', tip: '生食原味' },
            isDark: false,
            isSashimi: true
        };
    }
    
    const main = pickRandom(foodDB);
    let veg = pickRandom(foodDB);
    let attempts = 0;
    while (veg === main && attempts < 20) {
        veg = pickRandom(foodDB);
        attempts++;
    }
    if (veg === main) {
        veg = '土豆';
    }
    
    const cook = pickRandom(cookDB);
    const isDark = Math.random() < 0.2;
    let finalVeg = veg;
    if (isDark) {
        const magic = pickRandom(magicDB);
        finalVeg = veg + '+' + magic;
        console.log('💀 黑暗料理触发！添加了：', magic);
    }
    
    return {
        main: main,
        veg: finalVeg,
        cook: cook,
        isDark: isDark
    };
}

// ============================================
// 交互功能联动
// ============================================

const cookDisplay = document.getElementById('cookDisplay');
const mainDisplay = document.getElementById('mainDisplay');
const vegDisplay = document.getElementById('vegDisplay');
const cookTip = document.getElementById('cookTip');
const dishName = document.getElementById('dishName');
const generateBtn = document.getElementById('generateBtn');
const resetBtn = document.getElementById('resetBtn');
const darkTip = document.getElementById('darkTip');

const cardCook = document.getElementById('cardCook');
const cardMain = document.getElementById('cardMain');
const cardVeg = document.getElementById('cardVeg');

function startRolling() {
    cardCook.classList.add('rolling');
    cardMain.classList.add('rolling');
    cardVeg.classList.add('rolling');
    generateBtn.disabled = true;
    darkTip.style.display = 'none';
    cardCook.classList.remove('dark');
    cardMain.classList.remove('dark');
    cardVeg.classList.remove('dark');
    dishName.classList.remove('dark');
}

function stopRolling() {
    cardCook.classList.remove('rolling');
    cardMain.classList.remove('rolling');
    cardVeg.classList.remove('rolling');
    generateBtn.disabled = false;
}

function updateDishDisplay(dish) {
    cookDisplay.textContent = dish.cook.emoji + ' ' + dish.cook.method;
    mainDisplay.textContent = dish.main;
    vegDisplay.textContent = dish.veg;
    cookTip.textContent = '💡 ' + dish.cook.tip;
    
    const method = dish.cook.method;
    const main = dish.main;
    const veg = dish.veg;
    const vegClean = veg.split('+')[0];
    
    const meatKeywords = ['肉', '鸡', '鸭', '鱼', '虾', '鱿鱼', '排骨', '牛腩', '肥牛', '猪肝', '虾滑'];
    const isMainMeat = meatKeywords.some(keyword => main.includes(keyword));
    const isVegMeat = meatKeywords.some(keyword => vegClean.includes(keyword));
    
    const isStirFry = ['爆炒', '干煸', '煎制', '酱爆'].includes(method);
    const isStew = ['红烧', '焖煮', '炖汤'].includes(method);
    const isSteam = ['清蒸'].includes(method);
    const isCold = ['凉拌'].includes(method);
    const isDeepFry = ['油炸'].includes(method);
    const isBoil = ['水煮'].includes(method);
    const isGrill = ['烧烤'].includes(method);
    
    let dishNameText = '';
    
    if ((main === '鸡蛋' && vegClean === '西红柿') || (main === '西红柿' && vegClean === '鸡蛋')) {
        if (isStirFry || isStew) {
            dishNameText = '西红柿炒鸡蛋';
        } else {
            dishNameText = '西红柿' + method + '鸡蛋';
        }
    } else if ((main === '牛腩' && vegClean === '土豆') || (main === '土豆' && vegClean === '牛腩')) {
        dishNameText = '土豆炖牛腩';
    } else if ((main === '排骨' && vegClean === '土豆') || (main === '土豆' && vegClean === '排骨')) {
        dishNameText = '土豆烧排骨';
    } else if (dish.isSashimi || (method === '刺身' && (isMainMeat || isVegMeat))) {
        const meatName = isMainMeat ? main : vegClean;
        dishNameText = meatName + '刺身';
    } else {
        let connectWord = '';
        if (isStirFry) {
            connectWord = '炒';
        } else if (isStew) {
            connectWord = method === '红烧' ? '烧' : '炖';
        } else if (isCold) {
            connectWord = '拌';
        } else if (isSteam) {
            connectWord = '蒸';
        } else if (isDeepFry) {
            connectWord = '炸';
        } else if (isBoil) {
            connectWord = '煮';
        } else if (isGrill) {
            connectWord = Math.random() < 0.7 ? '烤' : '配';
        } else {
            connectWord = Math.random() < 0.5 ? '配' : method;
        }
        const isVegSpecial = ['鸡蛋', '豆腐'].includes(vegClean);
        if (isMainMeat && !isVegMeat) {
            dishNameText = main + connectWord + vegClean;
        } else if (!isMainMeat && isVegMeat) {
            dishNameText = vegClean + connectWord + main;
        } else if (isVegSpecial && !isMainMeat) {
            dishNameText = vegClean + connectWord + main;
        } else {
            dishNameText = main + connectWord + vegClean;
        }
    }
    
    if (dish.isDark) {
        const magicPart = veg.split('+')[1];
        if (magicPart) {
            if (['巧克力酱', '蓝莓酱', '芝士片'].includes(magicPart)) {
                dishNameText = magicPart + '风味' + dishNameText;
            } else {
                dishNameText = magicPart + dishNameText;
            }
            if (dishNameText.includes('刺身')) {
                const baseName = dishNameText.replace('刺身', '');
                dishNameText = magicPart + '味' + baseName + '刺身';
            }
        }
    }
    
    dishName.textContent = '🍽️ ' + dishNameText;
    
    if (dish.isSashimi || dishNameText.includes('刺身')) {
        darkTip.style.display = 'block';
        darkTip.textContent = '🍣 刺身彩蛋触发！请勿真的尝试生食！';
        darkTip.style.background = 'rgba(255, 200, 0, 0.3)';
        darkTip.style.border = '1px solid rgba(255, 200, 0, 0.3)';
        if (!dish.isDark) {
            cardCook.classList.add('dark');
            cardMain.classList.add('dark');
            cardVeg.classList.add('dark');
            dishName.classList.add('dark');
        }
    } else if (dish.isDark) {
        darkTip.style.display = 'block';
        darkTip.textContent = '💀 黑暗料理彩蛋触发！';
        darkTip.style.background = '';
        darkTip.style.border = '';
    } else {
        darkTip.style.display = 'none';
        darkTip.style.background = '';
        darkTip.style.border = '';
    }
}

function rollDish() {
    startRolling();
    let rollCount = 0;
    const maxRolls = 24;
    const intervalId = setInterval(() => {
        const tempDish = generateDish();
        cookDisplay.textContent = tempDish.cook.emoji + ' ' + tempDish.cook.method;
        mainDisplay.textContent = tempDish.main;
        vegDisplay.textContent = tempDish.veg;
        cookTip.textContent = '💡 ' + tempDish.cook.tip;
        rollCount++;
        if (rollCount >= maxRolls) {
            clearInterval(intervalId);
            const finalDish = generateDish();
            stopRolling();
            updateDishDisplay(finalDish);
        }
    }, 50);
}

function resetDish() {
    cookDisplay.textContent = '❓';
    mainDisplay.textContent = '❓';
    vegDisplay.textContent = '❓';
    cookTip.textContent = '点击下方按钮开始';
    dishName.textContent = '👆 点击下方按钮生成菜品';
    cardCook.classList.remove('rolling', 'dark');
    cardMain.classList.remove('rolling', 'dark');
    cardVeg.classList.remove('rolling', 'dark');
    dishName.classList.remove('dark');
    darkTip.style.display = 'none';
    generateBtn.disabled = false;
    // 移除分享预览（如果有）
    const preview = document.getElementById('sharePreview');
    if (preview) preview.remove();
}

generateBtn.addEventListener('click', rollDish);
resetBtn.addEventListener('click', resetDish);

console.log('🍽️ 配菜工具已就绪！点击"配菜！"按钮开始随机搭配。');

// ============================================
// 分享功能 - 支持微信长按保存
// ============================================

const shareBtn = document.getElementById('shareBtn');
const qrContainer = document.getElementById('qrcode-container');
const qrElement = document.getElementById('qrcode');

// 检测是否为微信内置浏览器
function isWechatBrowser() {
    return /MicroMessenger/i.test(navigator.userAgent);
}

function generateQR() {
    qrElement.innerHTML = '';
    new QRCode(qrElement, {
        text: window.location.href,
        width: 120,
        height: 120,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
}

async function shareScreenshot() {
    const isWechat = isWechatBrowser();
    const originalText = shareBtn.textContent;
    
    // 生成二维码并显示
    generateQR();
    qrContainer.style.display = 'block';
    
    shareBtn.textContent = '⏳ 生成中...';
    shareBtn.disabled = true;

    try {
        const canvas = await html2canvas(document.body, {
            scale: 2,
            useCORS: true,
            allowTaint: false,
            backgroundColor: '#ffffff',
            logging: false
        });

        qrContainer.style.display = 'none';

        // ===== 微信浏览器：显示图片引导长按保存 =====
        if (isWechat) {
            // 移除旧的预览
            const oldPreview = document.getElementById('sharePreview');
            if (oldPreview) oldPreview.remove();

            const img = document.createElement('img');
            img.src = canvas.toDataURL('image/png');
            img.style.width = '100%';
            img.style.maxWidth = '500px';
            img.style.borderRadius = '12px';
            img.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)';
            img.style.margin = '10px auto';
            img.style.display = 'block';
            img.style.border = '3px solid #fff';
            img.style.background = '#fff';

            const shareContainer = document.createElement('div');
            shareContainer.id = 'sharePreview';
            shareContainer.style.cssText = `
                text-align: center;
                padding: 15px;
                background: rgba(255,255,255,0.15);
                border-radius: 16px;
                margin: 10px 0;
                backdrop-filter: blur(10px);
            `;
            shareContainer.innerHTML = `
                <p style="color:#fff;font-size:16px;margin-bottom:10px;">👆 长按图片，选择"保存到相册"</p>
            `;
            shareContainer.appendChild(img);
            
            // 插入到 dishName 后面
            dishName.parentNode.insertBefore(shareContainer, dishName.nextSibling);

            shareBtn.textContent = '📤 长按图片保存';
            shareBtn.disabled = false;

            // 15秒后自动移除预览
            setTimeout(() => {
                const preview = document.getElementById('sharePreview');
                if (preview) preview.remove();
                shareBtn.textContent = '📤 分享今天的美食';
            }, 20000);
            
            return;
        }

        // ===== 非微信浏览器：直接下载 =====
        const link = document.createElement('a');
        link.download = '今天吃点啥.png';
        link.href = URL.createObjectURL(await new Promise(resolve => canvas.toBlob(resolve, 'image/png')));
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => {
            URL.revokeObjectURL(link.href);
        }, 1000);

        shareBtn.textContent = '✅ 已保存！';
        setTimeout(() => {
            shareBtn.textContent = originalText;
            shareBtn.disabled = false;
        }, 2000);

    } catch (error) {
        console.error('截图失败:', error);
        qrContainer.style.display = 'none';
        shareBtn.textContent = '❌ 失败';
        setTimeout(() => {
            shareBtn.textContent = '📤 分享今天的美食';
            shareBtn.disabled = false;
        }, 2000);
        alert('截图生成失败，请重试。');
    }
}

shareBtn.addEventListener('click', shareScreenshot);