Prune.css
================
#### Faceless CSS framework

[![NPM](http://img.shields.io/npm/v/prune.css.svg?style=flat-square)](https://www.npmjs.com/package/prune.css)
[![Bower](http://img.shields.io/bower/v/prune.css.svg?style=flat-square)](http://bower.io/search/?q=prune.css)
[![Apache-2.0](http://img.shields.io/npm/l/prune.css.svg?style=flat-square)](https://github.com/Addvilz/prune.css/)

### Why faceless?

Prune.css does not contain any "components", e.g. button styles etc. It contains a handful of utility classes, 24 column grid, hence leaving all the design effort up to you.

### Features:

- 24 column grid system
- Handful of utility classes
- Bundled [normalize.css](https://github.com/necolas/normalize.css) (thanks Nicolas Gallagher and contributors)


### Grid

```
.container-fluid|container
    .row =>
        .col[1-24]    : base sheet
        .col-sm[1-24] : >=320px
        .col-md[1-24] : >=768px
        .col-lg[1-24] : >=992px
        .col-xl[1-24] : >=1200px
```

Basic rules: content should be placed in one of the two container classes. Columns should be wrapped in .row elements.

Contrary to many other CSS frameworks out there, row and column classes does not have margins or paddings by default. If you want to pad all contents of the column, you can wrap them in something like `div.mrg-10`.

### Utilities

#### Border radius

Sets border radius from 0 to 10

```
.border-radius-[0-10]
```

#### Visibility

Controls element responsive visibility

```
.show[xs|sm|md|lg]: display element for given size and larger
.show-only[xs|sm|md:lg]: display element only for given size

.hide[xs|sm|md|lg]: hide element for given size and larger
.hide-only[xs|sm|md:lg]: hide element only for given size
```

#### Box model

Controls element padding and margin

```
.pad[0-25]: set element padding on all sides
.mrg[0-25]: set element margin on all sides
```

#### Various

```
.inline:        sets element display type inline-block
.block:         sets element display type block

.left:          float element to left
.right:         float element to right

.clearfix:      classic clearfix class

.show:          same as .block
.hide:          set element display type none

.block-center:  center element in relation to parent
.block-middle:  vertically align element to middle

.text-left      | set text alignment
.text-right     |
.text-center    |
.text-justify   |
```

### Thanks

Some concepts inspired by [Pure](http://purecss.io) and [Bootstrap](getbootstrap.com).

### License

Licensed under terms and conditions of Apache 2.0 license.