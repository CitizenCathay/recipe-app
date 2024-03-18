<!-- ABOUT THE PROJECT -->

## About The Project

![Image of application](/public/homepage.jpg)

### Recipe Web Application

Welcome to my recipe application deployed to Vercel and built using React, Next.js, Tailwind CSS and Express.js. I am an avid cook and gym goer, as a result, I regularly find myself scrutinizing the nutritional content of recipes I prepare. However, this information is not always available with all recipes found online. Thus, I wanted to build an application that could not only help me find delicious recipes but also clearly display their nutritional information, which would allow me to make quick judgements if the recipe was something I wanted to make.

### Features

- Search function: Users can enter one or multiple keywords to look for recipes.

- Search function returns 15 recipe results in the search results page but the view more button offers pagination features and displays more recipes when clicked.

- Featured and trending cards that are clickable which display search results for that category.

- Recipe cards grid in the search results page that are interactive and when clicked, bring the user to a new page that contains detailed recipe information.

- Dynamic Routing: Searching keywords or clicking on a recipe card leads to a dynamically generated page for that specific searchterm or recipe, providing users with in-depth insights.

- Responsive Design: The application is designed to work on various screen sizes, making it accessible across different devices.

![Image of application being used](/public/results_page.jpg)

### What I learned

- **Enhanced Proficiency in React:** Deepened my understanding of React and React hooks. Building components like `searchBar` and `trendingCard` deepened my understanding of hooks like `useEffect` and `useState`, resulting in cleaner and more maintainable code.

- **API Calls:** Learned how to make API calls from the frontend initially and then learned to implement API calling in backend for improved security which helped me better understand the flow of data between frontend and backend systems.

- **Static Typing:** Improved my understanding on static typing and can better appreciate how static typing helps with identifying potential errors early which allowed me to address them.

- **Component Composition:** Utilizing component composition patterns like nesting `recipeCard` within `searchResults` helped me build clean modular code which facilitated code maintenance and scalability.

- **Continuous learning & resilience:** I encountered challenges such as runtime errors, routing issues, problems with calling the API on the backend and deployment to Vercel. I learned how to better engage with documentation and experiment with different solutions to overcome these issues.
  <br></br>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Image credits

Photo by <a href="https://unsplash.com/@tasikola_pl?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Aleksandra Tanasiienko</a> on <a href="https://unsplash.com/photos/pasta-with-sauce-on-white-ceramic-plate-0y6eMd8vevA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

Photo by <a href="https://unsplash.com/@his_and?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">ikhsan baihaqi</a> on <a href="https://unsplash.com/photos/pasta-dish-on-brown-ceramic-bowl-4QXE7YQy7eo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

Photo by <a href="https://unsplash.com/@eastcoastkitchen?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Andy Hay</a> on <a href="https://unsplash.com/photos/cooked-food-on-stainless-steel-bowl-ZN-TT10kf4o?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

Photo by <a href="https://unsplash.com/@clorisyy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Cloris Ying</a> on <a href="https://unsplash.com/photos/round-white-ceramic-bowl-with-seafoods-rmdo8r9iGfw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

Photo by <a href="https://unsplash.com/@cerachiuu?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Cera</a> on <a href="https://unsplash.com/photos/sliced-vegetables-on-stainless-steel-cooking-pot-muV_8wy4mzw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

Photo by <a href="https://unsplash.com/@emanuelekstrom?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Emanuel Ekström</a> on <a href="https://unsplash.com/photos/pasta-dish-on-white-ceramic-plate-qxvhDhjFy4o?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

Photo by <a href="https://unsplash.com/@natinati?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nataliya Melnychuk</a> on <a href="https://unsplash.com/photos/waffle-on-white-ceramic-plate-fwmTmFbADCI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

Photo by <a href="https://unsplash.com/@sergeykotenev?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sergey Kotenev</a> on <a href="https://unsplash.com/photos/a-couple-of-steaks-sitting-on-top-of-a-table-j-17JLHMIpk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

Photo by <a href="https://unsplash.com/@jonathanborba?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jonathan Borba</a> on <a href="https://unsplash.com/photos/burger-with-fries-8l8Yl2ruUsg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

Photo by <a href="https://unsplash.com/@twoluckyspoons?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jodie Morgan</a> on <a href="https://unsplash.com/photos/strawberry-slices-AmbMt2PrCAY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

Photo by <a href="https://unsplash.com/@abhishek_sanwa?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Abhishek Sanwa Limbu</a> on <a href="https://unsplash.com/photos/dumpling-dishes-LR559Dcst70?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
