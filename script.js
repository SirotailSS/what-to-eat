// ============================================
// 数据建设 - 食材库（60+种，带标签）
// ============================================

const foodDB = [
    // ===== 肉类（红肉） =====
    { name: '五花肉', tags: ['肉类', '红肉', 'meat'] },
    { name: '猪里脊', tags: ['肉类', '红肉', 'meat'] },
    { name: '排骨', tags: ['肉类', '红肉', 'meat'] },
    { name: '猪肝', tags: ['肉类', '红肉', 'meat'] },
    { name: '肥牛卷', tags: ['肉类', '红肉', 'meat'] },
    { name: '牛腩', tags: ['肉类', '红肉', 'meat'] },
    { name: '牛肉片', tags: ['肉类', '红肉', 'meat'] },
    { name: '羊肉片', tags: ['肉类', '红肉', 'meat'] },
    
    // ===== 禽类 =====
    { name: '鸡腿肉', tags: ['禽类', '白肉', 'meat'] },
    { name: '鸡胸肉', tags: ['禽类', '白肉', 'meat'] },
    { name: '鸡翅中', tags: ['禽类', '白肉', 'meat'] },
    { name: '鸭肉', tags: ['禽类', '白肉', 'meat'] },
    { name: '鹅肉', tags: ['禽类', '白肉', 'meat'] },
    
    // ===== 水产 =====
    { name: '鲫鱼', tags: ['水产', '鱼类', 'seafood'] },
    { name: '草鱼', tags: ['水产', '鱼类', 'seafood'] },
    { name: '鲈鱼', tags: ['水产', '鱼类', 'seafood'] },
    { name: '三文鱼', tags: ['水产', '鱼类', 'seafood'] },
    { name: '龙利鱼', tags: ['水产', '鱼类', 'seafood'] },
    { name: '虾仁', tags: ['水产', '虾蟹', 'seafood'] },
    { name: '大虾', tags: ['水产', '虾蟹', 'seafood'] },
    { name: '螃蟹', tags: ['水产', '虾蟹', 'seafood'] },
    { name: '鱿鱼须', tags: ['水产', '贝类', 'seafood'] },
    { name: '扇贝', tags: ['水产', '贝类', 'seafood'] },
    { name: '蛤蜊', tags: ['水产', '贝类', 'seafood'] },
    
    // ===== 蛋类 =====
    { name: '鸡蛋', tags: ['蛋类', 'egg'] },
    { name: '鸭蛋', tags: ['蛋类', 'egg'] },
    
    // ===== 豆制品 =====
    { name: '豆腐', tags: ['豆制品', 'veg'] },
    { name: '老豆腐', tags: ['豆制品', 'veg'] },
    { name: '嫩豆腐', tags: ['豆制品', 'veg'] },
    { name: '腐竹', tags: ['豆制品', 'veg'] },
    { name: '千张', tags: ['豆制品', 'veg'] },
    { name: '豆干', tags: ['豆制品', 'veg'] },
    
    // ===== 叶菜类 =====
    { name: '白菜', tags: ['蔬菜', '叶菜', 'veg'] },
    { name: '菠菜', tags: ['蔬菜', '叶菜', 'veg'] },
    { name: '生菜', tags: ['蔬菜', '叶菜', 'veg'] },
    { name: '油菜', tags: ['蔬菜', '叶菜', 'veg'] },
    { name: '韭菜', tags: ['蔬菜', '叶菜', 'veg'] },
    
    // ===== 根茎类 =====
    { name: '土豆', tags: ['蔬菜', '根茎', 'veg'] },
    { name: '胡萝卜', tags: ['蔬菜', '根茎', 'veg'] },
    { name: '莲藕', tags: ['蔬菜', '根茎', 'veg'] },
    { name: '山药', tags: ['蔬菜', '根茎', 'veg'] },
    { name: '红薯', tags: ['蔬菜', '根茎', 'veg'] },
    
    // ===== 瓜果类 =====
    { name: '西红柿', tags: ['蔬菜', '瓜果', 'veg'] },
    { name: '茄子', tags: ['蔬菜', '瓜果', 'veg'] },
    { name: '青椒', tags: ['蔬菜', '瓜果', 'veg'] },
    { name: '红椒', tags: ['蔬菜', '瓜果', 'veg'] },
    { name: '黄椒', tags: ['蔬菜', '瓜果', 'veg'] },
    { name: '黄瓜', tags: ['蔬菜', '瓜果', 'veg'] },
    { name: '冬瓜', tags: ['蔬菜', '瓜果', 'veg'] },
    { name: '丝瓜', tags: ['蔬菜', '瓜果', 'veg'] },
    { name: '苦瓜', tags: ['蔬菜', '瓜果', 'veg'] },
    { name: '南瓜', tags: ['蔬菜', '瓜果', 'veg'] },
    
    // ===== 菌菇类 =====
    { name: '蘑菇', tags: ['蔬菜', '菌菇', 'veg'] },
    { name: '香菇', tags: ['蔬菜', '菌菇', 'veg'] },
    { name: '金针菇', tags: ['蔬菜', '菌菇', 'veg'] },
    { name: '杏鲍菇', tags: ['蔬菜', '菌菇', 'veg'] },
    { name: '木耳', tags: ['蔬菜', '菌菇', 'veg'] },
    
    // ===== 特殊食材（原黑暗调料，作为风味来源） =====
    { name: '草莓', tags: ['特殊', 'fruit'] },
    { name: '巧克力酱', tags: ['特殊', 'sauce'] },
    { name: '咖啡粉', tags: ['特殊', 'spice'] },
    { name: '芝士片', tags: ['特殊', 'dairy'] },
    { name: '薄荷糖', tags: ['特殊', 'sweet'] },
    { name: '柠檬汁', tags: ['特殊', 'sauce'] },
    { name: '芒果粒', tags: ['特殊', 'fruit'] },
    { name: '蓝莓酱', tags: ['特殊', 'sauce'] },
    { name: '棉花糖', tags: ['特殊', 'sweet'] },
    { name: '榴莲泥', tags: ['特殊', 'fruit'] }
];

// ============================================
// 数据建设 - 烹饪方式库（20种）
// ============================================

const cookDB = [
    // ===== 高频：炒、蒸、煮、炖、烧、拌（权重4） =====
    { method: '炒', emoji: '🔥', category: '炒类', tip: '大火快熟', format: 'a+b', weight: 4 },
    { method: '蒸', emoji: '♨️', category: '蒸类', tip: '原汁原味', format: 'a+b', weight: 4 },
    { method: '煮', emoji: '🥘', category: '煮类', tip: '鲜嫩入味', format: 'a+b', weight: 4 },
    { method: '炖', emoji: '🍲', category: '炖类', tip: '软烂入味', format: 'a+b', weight: 4 },
    { method: '烧', emoji: '🧄', category: '烧类', tip: '酱香浓郁', format: 'a+b', weight: 4 },
    { method: '拌', emoji: '🥗', category: '拌类', tip: '清爽开胃', format: 'a+b', weight: 4 },
    
    // ===== 中频：煎、炸、烤、汤（权重2） =====
    { method: '煎', emoji: '🍳', category: '煎类', tip: '两面金黄', format: 'verb+main', weight: 2 },
    { method: '炸', emoji: '🍗', category: '炸类', tip: '外酥里嫩', format: 'verb+main', weight: 2 },
    { method: '烤', emoji: '🥩', category: '烤类', tip: '焦香四溢', format: 'verb+main', weight: 2 },
    { method: '汤', emoji: '🥣', category: '汤类', tip: '营养暖胃', format: 'a+b+soup', weight: 2 },
    
    // ===== 低频：各种修饰词（权重1） =====
    { method: '爆炒', emoji: '🔥', category: '炒类', tip: '大火快炒', format: 'a+b', weight: 1 },
    { method: '清蒸', emoji: '♨️', category: '蒸类', tip: '清淡鲜美', format: 'a+b', weight: 1 },
    { method: '水煮', emoji: '🥘', category: '煮类', tip: '麻辣鲜香', format: 'a+b', weight: 1 },
    { method: '红烧', emoji: '🧄', category: '烧类', tip: '色泽红亮', format: 'a+b', weight: 1 },
    { method: '干烧', emoji: '🧄', category: '烧类', tip: '干香入味', format: 'a+b', weight: 1 },
    { method: '酥炸', emoji: '🍗', category: '炸类', tip: '酥脆可口', format: 'verb+main', weight: 1 },
    { method: '香煎', emoji: '🍳', category: '煎类', tip: '香气扑鼻', format: 'verb+main', weight: 1 },
    { method: '煲', emoji: '🍲', category: '炖类', tip: '慢火煲制', format: 'a+b', weight: 1 },
    { method: '焖', emoji: '🍲', category: '炖类', tip: '酥烂入味', format: 'a+b', weight: 1 },
    { method: '焗', emoji: '🥩', category: '烤类', tip: '奶香浓郁', format: 'verb+main', weight: 1 },
    { method: '凉拌', emoji: '🥗', category: '拌类', tip: '清凉爽口', format: 'a+b', weight: 1 },
    { method: '羹', emoji: '🥣', category: '汤类', tip: '浓稠顺滑', format: 'a+b+soup', weight: 1 }
];


// ============================================
// 工具函数
// ============================================

function pickRandom(arr) {
    if (!arr || arr.length === 0) {
        console.error('数组为空或未定义！');
        return null;
    }
    return arr[Math.floor(Math.random() * arr.length)];
}

// 加权随机抽取函数
function pickWeightedRandom(arr) {
    if (!arr || arr.length === 0) {
        console.error('数组为空或未定义！');
        return null;
    }
    
    const totalWeight = arr.reduce((sum, item) => sum + (item.weight || 1), 0);
    let random = Math.random() * totalWeight;
    
    for (const item of arr) {
        random -= (item.weight || 1);
        if (random <= 0) {
            return item;
        }
    }
    
    return arr[arr.length - 1];
}

function hasTag(item, tag) {
    return item.tags && item.tags.includes(tag);
}

function getFoodName(item) {
    return item.name;
}

function getFoodByTag(tag) {
    return foodDB.filter(item => hasTag(item, tag));
}

// ============================================
// 核心逻辑 - 配菜生成器
// ============================================

function generateDish() {
    // 1. 从食材库中随机选两个不同的食材
    let main = pickRandom(foodDB);
    let veg = pickRandom(foodDB);
    let attempts = 0;
    while (veg === main && attempts < 20) {
        veg = pickRandom(foodDB);
        attempts++;
    }
    if (veg === main) {
        veg = pickRandom(foodDB);
    }
    
    // 2. 随机选烹饪方式
    const cook = pickWeightedRandom(cookDB);
    
    // 3. 判断是否触发风味彩蛋（5%概率，需要辅料是特殊食材）
    const isFlavor = Math.random() < 0.05 && hasTag(veg, '特殊');
    
    return {
        main: main,
        veg: veg,
        cook: cook,
        isFlavor: isFlavor
    };
}

// ============================================
// 菜名生成器
// ============================================

function generateDishName(dish) {
    const mainName = getFoodName(dish.main);
    const vegName = getFoodName(dish.veg);
    const method = dish.cook.method;
    const category = dish.cook.category;
    
    let dishNameText = '';
    
    const isMainMeat = hasTag(dish.main, 'meat');
    const isMainSeafood = hasTag(dish.main, 'seafood');
    const isMainEgg = hasTag(dish.main, 'egg');
    
    // ===== 风味彩蛋触发时，菜名主体不包含辅料 =====
    // 汤类例外，因为需要辅料构成汤名
    const isSoup = category === '汤类';
    const shouldExcludeVeg = dish.isFlavor && !isSoup;
    
    // ===== 按烹饪分类生成菜名 =====
    switch (category) {
        case '炒类':
        case '爆炒':
        case '蒸类':
        case '煮类':
        case '炖类':
        case '烧类':
        case '拌类':
            if (shouldExcludeVeg) {
                // 触发风味：动词 + 主料（清蒸丝瓜）
                dishNameText = method + mainName;
            } else {
                // 正常：主料 + 动词 + 辅料（丝瓜清蒸榴莲泥）
                dishNameText = mainName + method + vegName;
            }
            break;
            
        case '炸类':
        case '烤类':
        case '煎类':
            const isMainProtein = isMainMeat || isMainSeafood || isMainEgg;
            if (isMainProtein) {
                if (shouldExcludeVeg) {
                    // 触发风味：动词 + 主料（煎鸡腿肉）
                    dishNameText = method + mainName;
                } else {
                    // 正常：动词 + 主料 + 配 + 辅料（香煎鸡腿肉配冬瓜）
                    dishNameText = method + mainName + '配' + vegName;
                }
            } else {
                if (shouldExcludeVeg) {
                    // 触发风味：动词 + 主料（煎豆腐）
                    dishNameText = method + mainName;
                } else {
                    // 正常：主料 + 动词 + 辅料（豆腐煎鸡蛋）
                    dishNameText = mainName + method + vegName;
                }
            }
            break;
            
        case '汤类':
            // 汤类特殊处理：无论是否触发风味，都需要辅料
            dishNameText = mainName + vegName + method;
            break;
            
        default:
            if (shouldExcludeVeg) {
                dishNameText = method + mainName;
            } else {
                dishNameText = mainName + method + vegName;
            }
    }
    
    // ===== 经典菜名硬编码（仅当未排除辅料时） =====
    if (!shouldExcludeVeg) {
        // 炒类经典
        if ((mainName === '鸡蛋' && vegName === '西红柿') || (mainName === '西红柿' && vegName === '鸡蛋')) {
            if (category === '炒类') {
                dishNameText = '西红柿炒鸡蛋';
            }
        }
        // 汤类经典
        if (category === '汤类') {
            if ((mainName === '鲫鱼' && vegName === '豆腐') || (mainName === '豆腐' && vegName === '鲫鱼')) {
                dishNameText = '鲫鱼豆腐汤';
            }
            if ((mainName === '西红柿' && vegName === '鸡蛋') || (mainName === '鸡蛋' && vegName === '西红柿')) {
                dishNameText = '西红柿鸡蛋汤';
            }
        }
    }
    
    // ===== 风味彩蛋：添加风味前缀 =====
    if (dish.isFlavor) {
        const flavorName = vegName;
        // 如果菜名中已经包含风味词，不再重复添加
        if (!dishNameText.includes(flavorName)) {
            // 风味前缀放在最前面
            dishNameText = flavorName + '风味' + dishNameText;
        }
    }
    
    return dishNameText;
}

// ============================================
// DOM 操作与交互
// ============================================

const cookDisplay = document.getElementById('cookDisplay');
const mainDisplay = document.getElementById('mainDisplay');
const vegDisplay = document.getElementById('vegDisplay');
const cookTip = document.getElementById('cookTip');
const dishName = document.getElementById('dishName');
const generateBtn = document.getElementById('generateBtn');
const resetBtn = document.getElementById('resetBtn');

const cardCook = document.getElementById('cardCook');
const cardMain = document.getElementById('cardMain');
const cardVeg = document.getElementById('cardVeg');

function startRolling() {
    cardCook.classList.add('rolling');
    cardMain.classList.add('rolling');
    cardVeg.classList.add('rolling');
    generateBtn.disabled = true;
}

function stopRolling() {
    cardCook.classList.remove('rolling');
    cardMain.classList.remove('rolling');
    cardVeg.classList.remove('rolling');
    generateBtn.disabled = false;
}

function updateDishDisplay(dish) {
    // 更新卡片内容
    cookDisplay.textContent = dish.cook.emoji + ' ' + dish.cook.method;
    mainDisplay.textContent = getFoodName(dish.main);
    vegDisplay.textContent = getFoodName(dish.veg);
    cookTip.textContent = '💡 ' + dish.cook.tip;
    
    // 生成菜名
    const dishNameText = generateDishName(dish);
    dishName.textContent = '🍽️ ' + dishNameText;
}

function rollDish() {
    startRolling();
    let rollCount = 0;
    const maxRolls = 24;
    const intervalId = setInterval(() => {
        const tempDish = generateDish();
        cookDisplay.textContent = tempDish.cook.emoji + ' ' + tempDish.cook.method;
        mainDisplay.textContent = getFoodName(tempDish.main);
        vegDisplay.textContent = getFoodName(tempDish.veg);
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
    cardCook.classList.remove('rolling');
    cardMain.classList.remove('rolling');
    cardVeg.classList.remove('rolling');
    generateBtn.disabled = false;
    closeShareOverlay();
    shareBtn.textContent = '📤 分享今天的美食';
    shareBtn.disabled = false;
    resetQRCode();
}

generateBtn.addEventListener('click', rollDish);
resetBtn.addEventListener('click', resetDish);

console.log('🍽️ 配菜工具已就绪！点击"配菜！"按钮开始随机搭配。');

// ============================================
// 分享功能
// ============================================

const shareBtn = document.getElementById('shareBtn');
const qrSection = document.getElementById('qrSection');
const qrPlaceholder = document.getElementById('qrPlaceholder');
const qrWrapper = document.getElementById('qrWrapper');
const qrElement = document.getElementById('qrcode');

function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function resetQRCode() {
    qrWrapper.style.display = 'none';
    qrPlaceholder.style.display = 'flex';
    qrElement.innerHTML = '';
}

function generateQR() {
    qrElement.innerHTML = '';
    new QRCode(qrElement, {
        text: window.location.href,
        width: 100,
        height: 100,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
}

function showQRCode() {
    qrElement.innerHTML = '';
    new QRCode(qrElement, {
        text: window.location.href,
        width: 100,
        height: 100,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
    qrPlaceholder.style.display = 'none';
    qrWrapper.style.display = 'flex';
    void qrWrapper.offsetHeight;
}

function closeShareOverlay() {
    const overlay = document.getElementById('shareOverlay');
    if (overlay) {
        overlay.remove();
    }
    document.body.style.overflow = '';
}

function showShareOverlay(imageDataUrl) {
    closeShareOverlay();

    const overlay = document.createElement('div');
    overlay.id = 'shareOverlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 99999;
        padding: 20px;
        animation: fadeInOverlay 0.3s ease;
    `;

    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInOverlay {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes scaleIn {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
    `;
    overlay.appendChild(style);

    const imgWrapper = document.createElement('div');
    imgWrapper.style.cssText = `
        max-width: 500px;
        width: 100%;
        border-radius: 16px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        overflow: hidden;
        animation: scaleIn 0.4s ease;
        background: #fff;
        padding: 4px;
    `;
    
    const img = document.createElement('img');
    img.src = imageDataUrl;
    img.style.cssText = `
        width: 100%;
        height: auto;
        display: block;
        border-radius: 12px;
    `;
    imgWrapper.appendChild(img);
    overlay.appendChild(imgWrapper);

    const tip = document.createElement('p');
    tip.textContent = '👆 长按图片，选择"保存到相册"';
    tip.style.cssText = `
        color: #fff;
        font-size: 16px;
        font-weight: 500;
        margin-top: 16px;
        text-shadow: 0 2px 10px rgba(0,0,0,0.3);
    `;
    overlay.appendChild(tip);

    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        width: 44px;
        height: 44px;
        border: none;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
        color: #fff;
        font-size: 24px;
        cursor: pointer;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        transition: background 0.2s;
        z-index: 100000;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    closeBtn.onmouseover = () => { closeBtn.style.background = 'rgba(255,255,255,0.3)'; };
    closeBtn.onmouseout = () => { closeBtn.style.background = 'rgba(255,255,255,0.2)'; };
    closeBtn.onclick = closeShareOverlay;
    overlay.appendChild(closeBtn);

    overlay.onclick = function(e) {
        if (e.target === overlay) {
            closeShareOverlay();
        }
    };

    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    shareBtn.textContent = '📤 已打开预览';
    shareBtn.disabled = false;

    setTimeout(() => {
        closeShareOverlay();
        shareBtn.textContent = '📤 分享今天的美食';
    }, 30000);
}

function downloadImage(canvas) {
    canvas.toBlob(function(blob) {
        const link = document.createElement('a');
        link.download = '今天吃点啥.png';
        link.href = URL.createObjectURL(blob);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => {
            URL.revokeObjectURL(link.href);
        }, 1000);
    }, 'image/png');
}

async function shareScreenshot() {
    const isMobile = isMobileDevice();
    const originalText = shareBtn.textContent;
    
    showQRCode();
    
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

        const imageDataUrl = canvas.toDataURL('image/png');

        if (isMobile) {
            showShareOverlay(imageDataUrl);
            return;
        }

        downloadImage(canvas);

        shareBtn.textContent = '✅ 已下载！';
        setTimeout(() => {
            shareBtn.textContent = originalText;
            shareBtn.disabled = false;
        }, 2000);

    } catch (error) {
        console.error('截图失败:', error);
        shareBtn.textContent = '❌ 失败';
        setTimeout(() => {
            shareBtn.textContent = '📤 分享今天的美食';
            shareBtn.disabled = false;
        }, 2000);
        alert('截图生成失败，请重试。');
    }
}

shareBtn.addEventListener('click', shareScreenshot);