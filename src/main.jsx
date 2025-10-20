import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 2. IMPORT VENDOR CSS FILES (Installed via npm/yarn)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import 'boxicons/css/boxicons.min.css';


// 6. IMPORT YOUR TEMPLATE'S MAIN JS LOGIC
import '../public/assets/js/main.js';




createRoot(document.getElementById('root')).render(

    <App />

)
