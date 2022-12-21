import {
    Home,
    Box,
    DollarSign,
    UserPlus,
    Users,
    Chrome,
    Settings,
    Airplay,
    FolderPlus,
    File,
    Command, Cloud, Book, FileText, Server, Image, Sliders, Map, GitPullRequest, Calendar, Edit, Mail, MessageSquare, UserCheck, Layers, HelpCircle, Database, Headphones, Mic, ShoppingBag, Search, AlertOctagon, Lock, Briefcase, BarChart
} from 'react-feather';

export const MENUITEMS = [
    {
        title: 'Dashboard', icon: Home, type: 'sub', badgeType: 'primary', active: false, children: [
            { path: `${process.env.PUBLIC_URL}/dashboard/default`, title: 'Default', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/dashboard/hospital`, title: 'Hospital', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/dashboard/sass`, title: 'Sass', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/dashboard/crm`, title: 'Crm', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/dashboard/crypto`, title: 'Crypto', type: 'link' }
        ]
    },
    {
        title: 'Widgets', icon: Airplay, type: 'sub', active: false, children: [
            { path: `${process.env.PUBLIC_URL}/widgets/general`, title: 'General', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/widgets/chart`, title: 'Chart', type: 'link' },
        ]
    },
    {
        title: 'Base', icon: Box, type: 'sub', active: false, children: [
            { path: `${process.env.PUBLIC_URL}/base/statecolor`, title: 'State-Color', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/base/typography`, title: 'Typography', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/base/avatars`, title: 'Avatars', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/base/helperclasses`, title: 'Helper Classes', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/base/grid`, title: 'Grid', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/base/tag-pills`, title: 'Tag & pills', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/base/progress-bar`, title: 'Progress', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/base/modal`, title: 'Modal', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/base/alert`, title: 'Alert', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/base/popover`, title: 'Popover', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/base/tooltips`, title: 'Tooltip', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/base/spinner`, title: 'Spinner ', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/base/dropdown`, title: 'Dropdown ', type: 'link' },

            {title: 'Tabs', type: 'sub', children: [
                { title: 'Bootstrap Tabs', type: 'link', path: `${process.env.PUBLIC_URL}/base/tab-bootstrap` },
                { title: 'Line Tabs', type: 'link', path: `${process.env.PUBLIC_URL}/base/tab-line` },

            ]},

            { path: `${process.env.PUBLIC_URL}/base/accordion`, title: 'Accordion', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/base/navs`, title: 'Navs ', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/base/shadow`, title: 'Shadow ', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/base/list`, title: 'List ', type: 'link' },

        ]
    },
    {
        title: 'Advance', icon: FolderPlus, type: 'sub', active: false, children: [
            { path: `${process.env.PUBLIC_URL}/advance/scrollable`, title: 'Scrollable ', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/advance/bootstrap-notify`, title: 'Bootstrap Notify ', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/advance/rating`, title: 'Rating', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/advance/dropzone`, title: 'Dropzone', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/advance/sweetAlert`, title: 'SweetAlert ', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/advance/tourComponent`, title: 'Tour ', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/advance/rangeSlider`, title: 'Range Slider ', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/advance/imageCropper`, title: 'Image Cropper ', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/advance/breadcrumb`, title: 'Breadcrumb ', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/advance/dragNDropComp`, title: 'Drag and Drop ', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/advance/carousel`, title: 'Owl Carousel', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/advance/pagination`, title: 'Pagination', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/advance/steps`, title: 'Steps ', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/advance/stickyNotes`, title: 'Sticky ', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/advance/image-upload`, title: 'Upload', type: 'link' },
            
        ]
    },
    {
        title: 'Icons', icon: Command, type: 'sub', active: false, children: [
            { path: `${process.env.PUBLIC_URL}/icons/flagIcons`, title: 'Flag Icon', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/icons/fontAwsomeIcon`, title: 'Fontawesome Icon ', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/icons/icoIcons`, title: 'Ico Icon ', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/icons/themifyIcons`, title: 'Themify Icon ', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/icons/featherIcons`, title: 'Feather Icon ', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/icons/weatherIcons`, title: 'Whether Icon ', type: 'link' },

            { path: `${process.env.PUBLIC_URL}/icons/simplelineIcon`, title: 'Simple Line Icon ', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/icons/material-design-icon`, title: 'Material Design Icon ', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/icons/pe7-icon`, title: 'Pe7 Icon', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/icons/typicons-icon`, title: 'Typicons Icon ', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/icons/ionic-icon`, title: 'Ionic Icon ', type: 'link' },
        ]
    },
    {
        title: 'Buttons', icon: Cloud, type: 'sub', active: false, children: [
            { path: `${process.env.PUBLIC_URL}/buttons/default-btn`, title: 'Default Style ', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/buttons/flatBtn`, title: 'Flat Style', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/buttons/edgeBtn`, title: 'Edge Style', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/buttons/raisedBtn`, title: 'Raised Style', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/buttons/groupBtn`, title: 'Button Group', type: 'link' },
        ]
    },
    {
        title: 'Gallery', icon: Image, type: 'sub', active: false, children: [
            { path: `${process.env.PUBLIC_URL}/gallery/imageGallery`, title: 'Gallery Grid ', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/gallery/imageWithDesc`, title: 'Gallery Grid With Desc ', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/gallery/mesonryGallery`, title: 'Masonry Gallery', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/gallery/mesonryDesc`, title: 'Masonry With Desc', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/gallery/imageHover`, title: 'Hover Effect', type: 'link' }
        ]
    },
    {
        title: 'Forms', icon: FileText, type: 'sub', active: false, children: [
            {
                title: ' Form Controls ', type: 'sub', children: [
                    { title: 'Form Validation', type: 'link', path: `${process.env.PUBLIC_URL}/forms/form-validation`},
                    { title: 'Basic Input', type: 'link', path: `${process.env.PUBLIC_URL}/forms/baseInput`},
                    { title: 'Checkbox & Radio', type: 'link', path: `${process.env.PUBLIC_URL}/forms/radio-checkbox`},
                    { title: 'Input Groups', type: 'link', path: `${process.env.PUBLIC_URL}/forms/inputGroup`},
                    { title: 'Mega Option', type: 'link', path: `${process.env.PUBLIC_URL}/forms/megaOptions`},

                ]
            },
            {
                title: 'Form Widgets', type: 'sub', children: [
                 { title: 'Datepicker', type: 'link', path:`${process.env.PUBLIC_URL}/form-widget/datepicker`},
                 { title: 'Timepicker', type: 'link', path:`${process.env.PUBLIC_URL}/form-widget/timepicker`},
                 { title: 'Typeahead', type: 'link', path:`${process.env.PUBLIC_URL}/form-widget/typeahead`},
                ]
            },
            { path: `${process.env.PUBLIC_URL}/forms/formDefault`, title: 'Form Default', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/forms/formWizard`, title: 'Form Wizard', type: 'link' },
        ]
    },
    {
        title: 'Tables', icon: Server, type: 'sub', children: [
            {
                title: ' Bootstrap Table ', type: 'sub', children: [
                    { title: 'Basic Table', type: 'link', path: `${process.env.PUBLIC_URL}/table/basic` },
                    { title: 'Sizing Table', type: 'link', path: `${process.env.PUBLIC_URL}/table/sizing` },
                    { title: 'Border Table', type: 'link', path: `${process.env.PUBLIC_URL}/table/border` },
                    { title: 'Styling Table', type: 'link', path: `${process.env.PUBLIC_URL}/table/styling` },
                ]
            },
            {
                title: 'Data Tables', path: `${process.env.PUBLIC_URL}/table/datatable`, type: 'link'
            }
        ]
    },
    {
        title: 'Cards', icon: Book, type: 'sub', active: false, children: [
            { path: `${process.env.PUBLIC_URL}/cards/basicCards`, title: 'Basic Card ', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/cards/creativeCards`, title: 'Creative Card ', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/cards/tabCard`, title: 'Tabbed Card ', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/cards/draggingCards`, title: 'Draggable Card', type: 'link' },
        ]
    },
    {
        title: 'Timeline', icon: Sliders, type: 'sub', children: [
            { path: `${process.env.PUBLIC_URL}/timelines/timeline1`, title: 'Timeline 1', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/timelines/timeline2`, title: 'Timeline 2', type: 'link' },
        ]
    },
    {
        title: 'Charts', icon: BarChart, type: 'sub', active: false, children: [
            { path: `${process.env.PUBLIC_URL}/charts/apexCharts`, type: 'link', title: 'Apex Chart' },
            { path: `${process.env.PUBLIC_URL}/charts/googleChart`, type: 'link', title: 'Google Chart' },
            { path: `${process.env.PUBLIC_URL}/charts/knobChart`, type: 'link', title: 'Knob Chart' },
            { path: `${process.env.PUBLIC_URL}/charts/chartJs`, type: 'link', title: 'Chartjs' },
            { path: `${process.env.PUBLIC_URL}/charts/chartistComponent`, type: 'link', title: 'Chartist' },
        ]
    },
    {
        title: 'Maps', icon: Map, type: 'sub', active: false, children: [
            { path: `${process.env.PUBLIC_URL}/map/googleMap`, type: 'link', title: 'Google Maps ' },
            { path: `${process.env.PUBLIC_URL}/map/LeafletMap`, type: 'link', title: 'Leaflet Maps ' },
        ]
    },
    {
        title: 'Editor', icon: GitPullRequest, type: 'sub', active: false,children: [
            { path: `${process.env.PUBLIC_URL}/editor/ckEditor`, type: 'link', title: 'CK  Editor' },
            { path: `${process.env.PUBLIC_URL}/editor/mdeEditor`, type: 'link', title: 'MDE Editor' },
        ]
    },
    {
        title: 'Users', icon: Users, type: 'sub', active: false, children: [
            { path: `${process.env.PUBLIC_URL}/users/userProfile`, type: 'link', title: 'Users Profile ' },
            { path: `${process.env.PUBLIC_URL}/users/userEdit`, type: 'link', title: 'Users Edit' },
            { path: `${process.env.PUBLIC_URL}/users/userCards`, type: 'link', title: 'Users Cards' },
        ]
    },
    {
        title: 'Calender', icon: Calendar, type: 'sub', active: false, children: [
            { path: `${process.env.PUBLIC_URL}/calendar/basic-calendar`, type: 'link', title: 'Calender', },
            { path: `${process.env.PUBLIC_URL}/calendar/draggable-calendar`, type: 'link', title: 'Draggable Calender' },
        ]
    },
    {
        title: 'Blog', icon: Edit, type: 'sub', active: false, children: [
            { path: `${process.env.PUBLIC_URL}/blog/blogDetail`, title: 'Blog Details', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/blog/blogSingle`, title: 'Blog Single', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/blog/blogPost`, title: 'Add Post', type: 'link' },
        ]
    },
    {
        title: 'Email App', icon: Mail, type: 'link', path: `${process.env.PUBLIC_URL}/Email-app/emailDefault`, active: false, bookmark: true
    },
    {
        title: 'Contact', icon: UserPlus, type: 'link', path: `${process.env.PUBLIC_URL}/contact-app/contact`, active: false,bookmark: true 
    },
    {
        title: 'Chat', icon: MessageSquare, type: 'link', path: `${process.env.PUBLIC_URL}/Chat-app/chat`, active: false, bookmark: true
    },
    {
        title: 'Social App', icon: Chrome, type: 'link', path: `${process.env.PUBLIC_URL}/social-app/socialApp`, active: false
    },
    {
        title: 'Job Search', icon: UserCheck, type: 'sub', active: false, children: [
            { path: `${process.env.PUBLIC_URL}/jobSearch/cardView`, title: 'Cards View', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/jobSearch/job-list`, title: 'List View', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/jobSearch/job-detail`, title: 'Job Details', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/jobSearch/job-apply`, title: 'Apply', type: 'link' }
        ]
    },
    {
        title: 'Learning', icon: Layers, type: 'sub', active: false, children: [
            { path: `${process.env.PUBLIC_URL}/learning/learning-list`, title: 'Learning List', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/learning/learning-detail`, title: 'Detail Course', type: 'link' },
        ]
    },
    {
        title: 'FAQ', icon: HelpCircle, type: 'link', path: `${process.env.PUBLIC_URL}/faq/faqComponent`, active: false
    },
    {
        title: 'Knowledgebase', icon: Database, type: 'link', path: `${process.env.PUBLIC_URL}/knowledgebase/knowledgebaseComponent`, active: false
    },
    {
        title: 'Support Ticket', icon: Headphones, type: 'link', path: `${process.env.PUBLIC_URL}/support-ticket/supportTicket`, active: false
    },
    {
        title: 'To-Do', icon: Mic, type: 'link', path: `${process.env.PUBLIC_URL}/todo-app/todo`, active: false
    },
    {
        title: 'To-Do-Firebase', icon: Mic, type: 'link', path: `${process.env.PUBLIC_URL}/todo-app/todo-firebase`, active: false
    },
    {
        title: 'Ecommerce', icon: ShoppingBag, type: 'sub', active: false, children: [
            { path: `${process.env.PUBLIC_URL}/ecommerce/product`, title: 'Product', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/ecommerce/product-detail/1`, title: 'Product Page', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/ecommerce/product-list`, title: 'Product List', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/ecommerce/payment-details`, title: 'Payment Detail', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/ecommerce/orderhistory`, title: 'Order History ', type: 'link' },
        ]
    },
    {
        title: 'Pricing', icon: DollarSign, path: `${process.env.PUBLIC_URL}/price/pricing`, type: 'link', active: false
    },
    {
        path: `${process.env.PUBLIC_URL}/sample/samplepage`, title: 'Sample Page', icon: File, type: 'link', active: false
    },
    {
        path: `${process.env.PUBLIC_URL}/search/searchpage`, title: 'Search Pages', icon: Search, type: 'link', active: false
    },
    {
        title: 'Error Pages', icon: AlertOctagon, type: 'sub', active: false, children: [
            { path: `${process.env.PUBLIC_URL}/pages/errors/error400`, title: 'Error 400', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/pages/errors/error401`, title: 'Error 401', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/pages/errors/error403`, title: 'Error 403', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/pages/errors/error404`, title: 'Error 404', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/pages/errors/error500`, title: 'Error 500', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/pages/errors/error503`, title: 'Error 503', type: 'link' },
        ]
    },
    {
        title: 'Authentication', icon: Lock, type: 'sub', active: false, children: [
            { path: `${process.env.PUBLIC_URL}/pages/login`, type: 'link', title: 'Login Simple' },
            { path: `${process.env.PUBLIC_URL}/pages/loginWithBgImg`, type: 'link', title: 'Login With Bg Image' },
            { path: `${process.env.PUBLIC_URL}/pages/loginWithVideo`, type: 'link', title: 'Login With Bg Video' },
            { path: `${process.env.PUBLIC_URL}/pages/signup`, type: 'link', title: 'Register Simple ' },
            { path: `${process.env.PUBLIC_URL}/pages/signupWithImg`, type: 'link', title: 'Register With Bg Image ' },
            { path: `${process.env.PUBLIC_URL}/pages/signupWithVideo`, type: 'link', title: 'Register With Bg Video ' },
            { path: `${process.env.PUBLIC_URL}/pages/unlockUser`, type: 'link', title: 'Unlock User' },
            { path: `${process.env.PUBLIC_URL}/pages/forgetPwd`, type: 'link', title: 'Forget Password ' },
            { path: `${process.env.PUBLIC_URL}/pages/resetPwd`, type: 'link', title: 'Reset Password ' }
        ]
    },
    {
        title: 'Coming Soon', type: 'sub', icon: Briefcase, active: false, children: [
            { path: `${process.env.PUBLIC_URL}/pages/comingsoon`, title: 'Coming Simple', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/pages/comingsoonImg`, title: 'Coming With Bg Image', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/pages/comingsoonVideo`, title: 'Coming With Bg Video', type: 'link' },
        ]
    },
    {
        title: 'Maintenance', icon: Settings, path: `${process.env.PUBLIC_URL}/pages/maintenance`, type: 'link', active: false
    }
]
