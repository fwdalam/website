const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

/* Sidebar collapsed style */
const style = document.createElement('style');
style.innerHTML = `
    #sidebar.collapsed {
        width: 60px;
    }
    #sidebar.collapsed h2,
    #sidebar.collapsed ul li a {
        display: none;
    }
`;
document.head.appendChild(style);
