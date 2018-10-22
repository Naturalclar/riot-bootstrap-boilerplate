<header>
  <div class="navbar fixed-top navbar-dark bg-dark navbar-expand-lg">
    <div class="navbar-brand"><a href="/#/"><img src="/imgs/logo-systena.svg" height="60px" alt=""/></a></div>
    <button class="navbar-button navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-2x fa-bars"> </i></button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ml-auto">
        <li class="{item.path} nav-item" each="{ item in items }"><a class="nav-link" href="/#/{ item.path }">{ item.title }</a></li>
      </ul>
    </div>
  </div>
  <script>
    import { menu } from '../utils/values'
    console.log(menu)
    this.items = menu
  </script>
  <style>
    .section {
      padding: 9em 0;
      text-align: center;
    }
    h1, p {
      margin-bottom: 3em;
    }
    i {
      color: #fff;
      transition: all .3s ease;
    }
    i:hover {
      color: #428bca;
    }
    a:link {
      color: #fff;
    }
    a:visited {
      color: #fff;
    }
    .active {
      border-bottom: 3px solid #fff;
      display: inline-block;
      line-height: 0.95;
    }
  </style>
</header>