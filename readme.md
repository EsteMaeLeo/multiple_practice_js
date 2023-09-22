# Javascript Repository to practice

Will find different projects for Javascript, HTML, CSS.
Also for use different frameworks.

# Javascript

Variable create using LET new form and for legacy you can find VAR.

Loops: for(let i = 0; i<5; i++){}

while(age < 18){
age++
}

Functions:
function add(a, b{
return a + b;
})

Arror functions:
const add = (a,b) => {
return a + b;
}

Conditionals:

```
if{age < 30}{
    console.log("Younger than 30);
}else{
    console.log("Older than 30");
}
```

New:
`age < 30 ? console.log("Younger than 30) : console.log("Older than 30")`

# Tailwind

For play CDN use ` "<script src="https://cdn.tailwindcss.com"></script>`

for use components inside index.html example:

```
<style type="text/tailwindcss">
      @tailwind base;
      @tailwind components;
      @tailwind utilities;

      @layer components {
        .card {
          @apply m-10 rounded-lg bg-white px-6 py-8 shadow-xl ring-2 ring-slate-900/5 dark:bg-black;
        }
      }
 </style>
```

Configuration example:

```
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              light-brown: "#973F29",
            },
          },
        },
      };
```

VITE: Tailwind install current folder ./ example: npm create vite@latest ./ -- --template react

Dependencies: npm install -D tailwindcss postcss autoprefixer and npx tailwindcss init -p

Run the app: npm run dev
