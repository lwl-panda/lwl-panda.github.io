// script.js
document.addEventListener('DOMContentLoaded', () => {
    // 头像交互效果
    const initComponents = () => {
        const avatar = document.querySelector('.avatar');
        const contentBox = document.querySelector('.content-box');

        // 头像加载动画
        if(avatar) {
            avatar.style.opacity = '0';
            avatar.style.transform = 'translateY(30px) scale(0.95)';

            setTimeout(() => {
                avatar.style.transition = 'all 0.8s cubic-bezier(0.22, 0.61, 0.36, 1)';
                avatar.style.opacity = '1';
                avatar.style.transform = 'translateY(-15px) scale(1)';
            }, 500);

            // 悬停效果
            avatar.addEventListener('mouseenter', () => {
                avatar.style.transform = 'translateY(-15px) scale(1.08)';
                avatar.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.35)';
            });

            avatar.addEventListener('mouseleave', () => {
                avatar.style.transform = 'translateY(-15px) scale(1)';
                avatar.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)';
            });
        }

        // 内容区域动画
        if(contentBox) {
            contentBox.style.opacity = '0';
            contentBox.style.transform = 'translateY(30px)';

            setTimeout(() => {
                contentBox.style.transition = 'all 0.8s 0.3s cubic-bezier(0.22, 0.61, 0.36, 1)';
                contentBox.style.opacity = '1';
                contentBox.style.transform = 'translateY(0)';
            }, 800);
        }
    }

    // 初始化执行
    initComponents();
});