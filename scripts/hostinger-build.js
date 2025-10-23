// scripts/hostinger-build.js
const fs = require('fs');
const path = require('path');

console.log('🚀 Preparing Hostinger build for root deployment...');

const createHostingerFiles = () => {
  // ✅ Ensure hero directory exists
  const heroDir = path.join('public', 'hero');
  if (!fs.existsSync(heroDir)) {
    fs.mkdirSync(heroDir, { recursive: true });
    console.log('📁 Created missing /public/hero directory');
  }

  // ✅ Check if hero images exist
  const heroImages = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
  heroImages.forEach(image => {
    const imagePath = path.join(heroDir, image);
    if (!fs.existsSync(imagePath)) {
      console.warn(`⚠️  Warning: ${imagePath} not found`);
    }
  });

  // ✅ .htaccess for root-level static export
  const htaccessContent = `# ----------------------------------------------
# ✅ Next.js Static Export Configuration for Hostinger
# ----------------------------------------------

# Enable URL rewriting engine
RewriteEngine On

# Handle client-side routing (SPA style)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [L]

# Enable gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/plain
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/xml
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE text/javascript
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/x-javascript
  AddOutputFilterByType DEFLATE application/json
  AddOutputFilterByType DEFLATE application/xml
</IfModule>

# Cache static assets for faster load
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
`;

  // ✅ Write .htaccess to public/
  const htaccessPath = path.join('public', '.htaccess');
  fs.writeFileSync(htaccessPath, htaccessContent);
  console.log('✅ Created .htaccess file for root deployment');

  console.log('✅ Hero image check complete');
};

try {
  createHostingerFiles();
  console.log('🎉 Hostinger build preparation complete for ROOT deployment!');
} catch (error) {
  console.error('❌ Error during Hostinger build prep:', error);
  process.exit(1);
}
