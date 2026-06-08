import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <header>
      <h1 routerLink="/">ng-openlayers demo</h1>
      <nav aria-label="Project links">
        <a href="https://www.npmjs.com/package/ng-openlayers" rel="noopener">npm</a>
        <a href="https://github.com/kamilfurtak/ng-openlayers" rel="noopener">GitHub</a>
      </nav>
    </header>
    <div class="main-container"><router-outlet></router-outlet></div>
  `,
    styles: [
        `
      header {
        top: 0;
        height: 75px;
        width: 100%;
        display: -ms-flexbox;
        display: flex;
        flex-wrap: wrap;
        -ms-flex-pack: justify;
        justify-content: space-between;
        z-index: 4;
        background-color: #202124;
        color: #fff;
        font-family: Roboto, sans-serif;
        font-size: 16px;
        align-items: center;
        opacity: 1;
        box-shadow:
          0 2px 4px -1px rgba(0, 0, 0, 0.2),
          0 4px 5px 0 rgba(0, 0, 0, 0.14),
          0 1px 10px 0 rgba(0, 0, 0, 0.12);
      }

      header h1 {
        padding-left: 1rem;
        cursor: pointer;
      }

      nav {
        display: flex;
        gap: 1rem;
        margin-left: auto;
        padding-right: 1rem;
      }

      nav a {
        color: #fff;
        font-weight: 600;
        text-decoration: none;
      }

      nav a:hover {
        text-decoration: underline;
      }

      .main-container {
        height: calc(100% - 72px);
        background-color: white;
        margin: 0px;
        overflow: auto;
      }
    `,
    ],
    standalone: false
})
export class AppComponent {}
