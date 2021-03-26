// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import user defined schema types
import config from './config.js';
import header from './header.js';
import footer from './footer.js';
import advanced from './advanced.js';
import blog from './blog.js';
import portfolio from './portfolio.js';
import page from './page.js';
import post from './post.js';
import project from './project.js';
import section_content from './section_content.js';
import section_form from './section_form.js';
import section_grid from './section_grid.js';
import section_hero from './section_hero.js';
import section_portfolio from './section_portfolio.js';
import section_posts from './section_posts.js';
import section_testimonials from './section_testimonials.js';
import action from './action.js';
import grid_item from './grid_item.js';
import testimonial from './testimonial.js';
import form_field from './form_field.js';
import stackbit_page_meta from './stackbit_page_meta.js';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    config,
    header,
    footer,
    advanced,
    blog,
    portfolio,
    page,
    post,
    project,
    section_content,
    section_form,
    section_grid,
    section_hero,
    section_portfolio,
    section_posts,
    section_testimonials,
    action,
    grid_item,
    testimonial,
    form_field,
    stackbit_page_meta
    ])
})
