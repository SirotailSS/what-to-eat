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
    // ===== 【刺身彩蛋】8%概率触发：随机荤菜变刺身 =====
    if (Math.random() < 0.02) {  // 2%概率
        // 从荤菜列表中随机选一个
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
            isSashimi: true  // 标记为刺身彩蛋
        };
    }
    
    // 从总食材库中随机取第一个食材（作为"主料"）
    const main = pickRandom(foodDB);
    
    // 从总食材库中随机取第二个食材（作为"辅料"），不能和第一个相同
    let veg = pickRandom(foodDB);
    let attempts = 0;
    while (veg === main && attempts < 20) {
        veg = pickRandom(foodDB);
        attempts++;
    }
    
    // 如果尝试了20次还是相同（理论上不可能），给一个默认值
    if (veg === main) {
        veg = '土豆'; // 保底方案
    }
    
    const cook = pickRandom(cookDB);
    
    // 黑暗彩蛋机制：20%概率触发
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
// 阶段五：交互功能联动
// ============================================

// 1. 获取DOM元素
const cookDisplay = document.getElementById('cookDisplay');
const mainDisplay = document.getElementById('mainDisplay');
const vegDisplay = document.getElementById('vegDisplay');
const cookTip = document.getElementById('cookTip');
const dishName = document.getElementById('dishName');
const generateBtn = document.getElementById('generateBtn');
const resetBtn = document.getElementById('resetBtn');
const darkTip = document.getElementById('darkTip');

// 2. 获取卡片容器（用于添加滚动动画）
const cardCook = document.getElementById('cardCook');
const cardMain = document.getElementById('cardMain');
const cardVeg = document.getElementById('cardVeg');

// 3. 滚动动画函数
function startRolling() {
    // 添加滚动动画类
    cardCook.classList.add('rolling');
    cardMain.classList.add('rolling');
    cardVeg.classList.add('rolling');
    
    // 禁用按钮，防止重复点击
    generateBtn.disabled = true;
    
    // 隐藏黑暗提示
    darkTip.style.display = 'none';
    
    // 移除黑暗样式
    cardCook.classList.remove('dark');
    cardMain.classList.remove('dark');
    cardVeg.classList.remove('dark');
    dishName.classList.remove('dark');
}

function stopRolling() {
    // 移除滚动动画类
    cardCook.classList.remove('rolling');
    cardMain.classList.remove('rolling');
    cardVeg.classList.remove('rolling');
    
    // 启用按钮
    generateBtn.disabled = false;
}

// 4. 更新界面显示菜品
function updateDishDisplay(dish) {
    // 更新三个卡片的内容
    cookDisplay.textContent = dish.cook.emoji + ' ' + dish.cook.method;
    mainDisplay.textContent = dish.main;
    vegDisplay.textContent = dish.veg;
    
    // 更新烹饪提示
    cookTip.textContent = '💡 ' + dish.cook.tip;
    
    // ===== 智能菜名生成逻辑 =====
    const method = dish.cook.method;
    const main = dish.main;
    const veg = dish.veg;
    const vegClean = veg.split('+')[0];
    
    // 判断食材类型
    const meatKeywords = ['肉', '鸡', '鸭', '鱼', '虾', '鱿鱼', '排骨', '牛腩', '肥牛', '猪肝', '虾滑'];
    const isMainMeat = meatKeywords.some(keyword => main.includes(keyword));
    const isVegMeat = meatKeywords.some(keyword => vegClean.includes(keyword));
    
    // 判断烹饪方式
    const isStirFry = ['爆炒', '干煸', '煎制', '酱爆'].includes(method);
    const isStew = ['红烧', '焖煮', '炖汤'].includes(method);
    const isSteam = ['清蒸'].includes(method);
    const isCold = ['凉拌'].includes(method);
    const isDeepFry = ['油炸'].includes(method);
    const isBoil = ['水煮'].includes(method);
    const isGrill = ['烧烤'].includes(method);
    
    let dishNameText = '';
    
    // ===== 特殊经典菜名硬编码 =====
    // 西红柿 + 鸡蛋
    if ((main === '鸡蛋' && vegClean === '西红柿') || (main === '西红柿' && vegClean === '鸡蛋')) {
        if (isStirFry || isStew) {
            dishNameText = '西红柿炒鸡蛋';
        } else {
            dishNameText = '西红柿' + method + '鸡蛋';
        }
    }
    // 土豆 + 牛肉
    else if ((main === '牛腩' && vegClean === '土豆') || (main === '土豆' && vegClean === '牛腩')) {
        dishNameText = '土豆炖牛腩';
    }
    // 土豆 + 排骨
    else if ((main === '排骨' && vegClean === '土豆') || (main === '土豆' && vegClean === '排骨')) {
        dishNameText = '土豆烧排骨';
    }
    // ===== 【修改】刺身彩蛋处理（任何荤菜） =====
    else if (dish.isSashimi || (method === '刺身' && (isMainMeat || isVegMeat))) {
        // 如果是刺身，菜名格式为"XXX刺身"
        const meatName = isMainMeat ? main : vegClean;
        dishNameText = meatName + '刺身';
    }
    
    // ===== 通用逻辑 =====
    else {
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
    
    // ===== 【关键修改】黑暗料理：暗黑调料作为前缀融入菜名 =====
    if (dish.isDark) {
        const magicPart = veg.split('+')[1];
        if (magicPart) {
            if (['巧克力酱', '蓝莓酱', '芝士片'].includes(magicPart)) {
                dishNameText = magicPart + '风味' + dishNameText;
            } else if (['咖啡粉', '榴莲泥'].includes(magicPart)) {
                dishNameText = magicPart + dishNameText;
            } else {
                dishNameText = magicPart + dishNameText;
            }

            if (dishNameText.includes('刺身')) {
                // 去掉"刺身"两个字，在前面加调料
                const baseName = dishNameText.replace('刺身', '');
                dishNameText = magicPart + '味' + baseName + '刺身';
            }
        }
        
    }
    
    // 更新完整菜名
    dishName.textContent = '🍽️ ' + dishNameText;
    
    // ===== 【修改】刺身彩蛋特殊提示 =====
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
        // 普通黑暗料理
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

// 5. 老虎机滚动效果（核心交互）
function rollDish() {
    // 开始滚动动画
    startRolling();
    
    // 每隔50ms更新一次显示内容（模拟老虎机滚动）
    let rollCount = 0;
    const maxRolls = 24; // 1.2秒 / 50ms = 24次
    
    const intervalId = setInterval(() => {
        // 每次滚动时随机生成临时数据并显示
        const tempDish = generateDish();
        
        // 更新卡片显示（但使用临时数据）
        cookDisplay.textContent = tempDish.cook.emoji + ' ' + tempDish.cook.method;
        mainDisplay.textContent = tempDish.main;
        vegDisplay.textContent = tempDish.veg;
        cookTip.textContent = '💡 ' + tempDish.cook.tip;
        
        rollCount++;
        
        // 达到滚动次数后停止
        if (rollCount >= maxRolls) {
            clearInterval(intervalId);
            
            // 生成最终结果
            const finalDish = generateDish();
            
            // 停止滚动动画
            stopRolling();
            
            // 显示最终结果
            updateDishDisplay(finalDish);
        }
    }, 50); // 每50ms更新一次
}

// 6. 重置功能
function resetDish() {
    // 如果正在滚动，先清除动画（但这里简化处理，直接重置界面）
    // 重置所有显示为初始状态
    cookDisplay.textContent = '❓';
    mainDisplay.textContent = '❓';
    vegDisplay.textContent = '❓';
    cookTip.textContent = '点击下方按钮开始';
    dishName.textContent = '👆 点击下方按钮生成菜品';
    
    // 移除所有特殊样式
    cardCook.classList.remove('rolling', 'dark');
    cardMain.classList.remove('rolling', 'dark');
    cardVeg.classList.remove('rolling', 'dark');
    dishName.classList.remove('dark');
    darkTip.style.display = 'none';
    
    // 启用按钮（如果被禁用了）
    generateBtn.disabled = false;
}

// 7. 绑定按钮事件
generateBtn.addEventListener('click', rollDish);
resetBtn.addEventListener('click', resetDish);

// 8. 页面加载时显示默认状态
console.log('🍽️ 配菜工具已就绪！点击"配菜！"按钮开始随机搭配。');

// ============================================
// 分享功能 - 直接保存到相册/下载
// ============================================

const shareBtn = document.getElementById('shareBtn');
const qrContainer = document.getElementById('qrcode-container');
const qrElement = document.getElementById('qrcode');

// 生成二维码（隐藏状态）
function generateQR() {
    // 清空之前的二维码
    qrElement.innerHTML = '';
    // 生成新的二维码，尺寸适合截图
    new QRCode(qrElement, {
        text: window.location.href,
        width: 120,
        height: 120,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
}

// 分享截图 - 直接保存到相册/下载
async function shareScreenshot() {
    // 1. 生成二维码
    generateQR();
    // 2. 显示二维码容器（截图时可见）
    qrContainer.style.display = 'block';

    // 保存按钮原始文字
    const originalText = shareBtn.textContent;
    shareBtn.textContent = '⏳ 生成中...';
    shareBtn.disabled = true;

    try {
        // 3. 使用 html2canvas 截取整个页面（包含二维码）
        const canvas = await html2canvas(document.body, {
            scale: 2,               // 高清输出
            useCORS: true,
            allowTaint: false,
            backgroundColor: '#ffffff',
            logging: false
        });

        // 4. 隐藏二维码（避免一直显示）
        qrContainer.style.display = 'none';

        // 5. 将 canvas 转为图片 blob
        const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));

        // 6. 创建下载链接
        const link = document.createElement('a');
        link.download = '今天吃点啥.png';
        link.href = URL.createObjectURL(blob);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // 释放内存
        setTimeout(() => {
            URL.revokeObjectURL(link.href);
        }, 1000);

        // 更新按钮状态
        shareBtn.textContent = '✅ 已保存！';
        setTimeout(() => {
            shareBtn.textContent = originalText;
            shareBtn.disabled = false;
        }, 2000);

    } catch (error) {
        console.error('截图或分享失败:', error);
        // 出错时确保二维码隐藏
        qrContainer.style.display = 'none';
        shareBtn.textContent = '❌ 失败';
        setTimeout(() => {
            shareBtn.textContent = '📤 分享今天的美食';
            shareBtn.disabled = false;
        }, 2000);
        alert('截图生成失败，请重试。');
    }
}

// 绑定分享按钮点击事件
shareBtn.addEventListener('click', shareScreenshot);