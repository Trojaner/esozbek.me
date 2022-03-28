import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import PortfolioPagePreview from './preview-templates/PortfolioPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('Portfolio', PortfolioPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
