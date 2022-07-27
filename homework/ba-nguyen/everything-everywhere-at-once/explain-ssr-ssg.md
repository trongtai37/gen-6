# SSR vs SSG

## What is server-side redering (SSR)?

> With SSR, you can render the JavaScript code on the server and send indexable HTML to the user. The HTML is thus **generated during runtime** so that it can reach search engines and users at the same time.
> For example, it is NextJS. Before Next.js showed up, such a process required a lot of tweaking and came with issues related to server load, on-demand content, caching, or even the application architecture itself. Don’t get me wrong – it was certainly doable, but it would have been nice if one could dedicate all that time to developing business logic instead…

### When to use SSR?

> SSR is recommended for apps in which you have to pre-render frequently updated data from external sources. This technique is especially recommended when the data cannot be statically generated before a user request takes place, and at the same time needs to be available to search engines.

## What is static site generation (SSG)?

> The major difference between SSR and SSG is that in the latter’s case, rather than during runtime, your HTML is generated during build time. Such websites are extremely fast since the HTML content is served even before you make a request. On the other hand, the website needs to be rebuilt and reloaded entirely every time a change is made. Consequently, SSG-based websites are far less interactive and native-like than those that rely on SSR. They are largely static sites with little to no dynamic content.

![ssr ssg overview](https://tsh.io/wp-content/uploads/2022/03/ssr-ssg-overview.png)

### When to use SSG?

> SSG is recommended for use on any page where you have to pre-render data. It can be generated before a user request takes place. It means that your data is available at build time, or in other words – on every page where you want to present static content or provide excellent SEO capabilities.
