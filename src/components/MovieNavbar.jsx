import React from 'react'

const MovieNavbar = () => {
  return (
    <div>


<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">NOW SHOWING</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/suggest">SUGGESTED</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/watch">WATCHED</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/search">SEARCH</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>











    </div>
  )
}

export default MovieNavbar