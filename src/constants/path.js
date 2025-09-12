const path = {
    client : {
        homepage: '/',
        about: '/about',
        login: '/login',
        careers: '/careers',
        contact: '/contact',
        news: '/news',
        training: {
            video: '/video-tutorial',
            knowledge: '/knowledge',
            ebook: '/ebook',
        },
        product: {
            copytrade: '/copytrade',
            congcu: '/cong-cu',
            tuvan: '/tu-van',
            thietkedanhmuc: '/thiet-ke-danh-muc',
        }
    },
    admin: {
        articles: {
            all: '/admin/articles',
            add: '/admin/articles/add',
            edit: (articleId) => `/admin/articles/edit/${articleId}`
        },
        control_panel: '/admin/control-panel',
        career: {
            all: '/admin/careers',
            add: '/admin/careers/add'
        }
    },
    auth: {
        login: '/admin/login',
        register: '/admin/register',
    }
}

export default path;