# Tanoshii Portfolio

A responsive developer portfolio built with Next.js 16, React, TypeScript, and Tailwind CSS. It includes a hero introduction, services, skills, selected projects, resume timeline, mini-games, and a contact form.

## Create your own portfolio

1. **Clone or download the project**
   ```bash
   git clone <your-repository-url>
   cd tanoshii-portfolio
   ```
2. **Install dependencies**
   ```bash
   pnpm install
   ```
3. **Configure contact delivery**
   Create `.env.local` and add a Resend API key:
   ```env
   RESEND_API_KEY=re_your_key_here
   ```
   The contact endpoint returns a clear configuration error until this variable is set; the rest of the portfolio remains buildable without it.
4. **Personalize the content**
   Update the text, links, project data, services, skills, and resume entries in `components/Home/`. Update SEO metadata in `app/layout.tsx`.
5. **Run the development server**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000).
6. **Check the production build**
   ```bash
   pnpm build
   pnpm start
   ```

## Project structure

- `app/page.tsx` — portfolio page entry point
- `app/layout.tsx` — global metadata, fonts, and document shell
- `app/globals.css` — theme tokens, responsive styles, and animations
- `components/Home/` — portfolio sections and interactive components
- `app/api/contact/route.ts` — validated contact form email endpoint
- `public/` — static assets such as images, icons, and documents

## Content checklist

- Replace the profile name, bio, role, social URLs, and email address.
- Add real project links and screenshots with descriptive alt text.
- Replace the resume file and update experience and education entries.
- Use a verified sender domain in Resend before production launch.
- Review keyboard navigation, mobile layouts, reduced motion, and form error states.

## Deploy to Vercel

Import the repository into [Vercel](https://vercel.com/new), set `RESEND_API_KEY` in the project environment variables, and deploy. Vercel automatically detects the Next.js build settings.

## Recommended maintenance

Run `pnpm build` before publishing, keep dependencies current, compress large images, and test the contact form from the deployed URL. Never commit `.env.local` or API keys.

## Learn more

- [Next.js documentation](https://nextjs.org/docs)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)
- [Resend documentation](https://resend.com/docs)
- [Vercel deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)

## License

Add the license that matches how you want others to use this portfolio.
