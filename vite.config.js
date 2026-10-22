import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'resume-content-disposition',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.includes('Navadeep_Burri_Resume')) {
            res.setHeader('Content-Disposition', 'attachment; filename="Navadeep_Burri_Resume.pdf"');
          }
          next();
        });
      }
    }
  ],
  base: '/portfolio-/',
})
