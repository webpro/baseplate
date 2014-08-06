# Styleguide

To generate the styleguide, run this from root of project:

    grunt compass:dist && kss-node src/scss styleguide --css dist/css/all.css && kss-node src/scss styleguide --css dist/css/all.css
