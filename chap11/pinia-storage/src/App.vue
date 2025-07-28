<template>
  <header>
    <h1>Pinia 샘플</h1>
    <main>
      <RouterView />
    </main>
  </header>
</template>

<style>
main {
  border: 1px solid blue;
  padding: 10px;
}
#breadcrumbs ul li {
  display: inline;
  list-style-type: none;
}
#breadcrumbs ul {
  padding-left: 0;
}
#breadcrumbs ul .current {
  color: red;
}
#breadcrumbs ul li:before {
  content: " > ";
}
#breadcrumbs ul li:first-child:before {
  content: none;
}
</style>