# 🏠 Home Page Structure — Job Finder Dashboard

---

## 🔝 1. Header / Navbar

**Components:**

- Logo (`JobFinder 🚀`) 
- Search input (global search) - CTA
- Navigation links: `Profile` | `Saved Jobs`
- Dark / light mode toggle

**Structure:**

```jsx
<Navbar>
  <Logo />
  <SearchBar />
  <NavLinks />
</Navbar>
```

**UI idea:**

```
[Logo]    [Search jobs…]    Profile | Saved Jobs    [Dark / Light]
```

---

## 🎯 2. Hero Section _(Top Banner)_

> 👉 Gives first impression 

- **Heading:** `"Find Your Dream Remote Job"`
- **Subtext:** `"Search thousands of remote jobs from top companies"`

**Structure:**

```jsx
<Hero>
  <h1 />
  <p />
</Hero>
```

---

## 🔍 3. Filters Section

> 👉 Sits **below** the Hero Section

**Filters:**

- Category _(dropdown)_
- Job Type _(optional)_
- Remote Only _(toggle)_
- Clear Filters button

**Structure:**

```jsx
<Filters>
  <CategoryFilter />
  <ToggleRemote />
  <ClearButton />
</Filters>
```

---

## 📋 4. Job Listings Section _(Main Part)_

> 👉 This is the **core** of the page

**Layout:** Grid (2–3 columns)

**Each `JobCard` contains:**

- Job Title
- Company Name
- Location
- Salary
- Tags: `Remote` · `Full-time`
- Buttons: `View Details` · `Save Job ⭐`

**Structure:**

```jsx
<JobList>
  {jobs.map((job) => (
    <JobCard key={job.id} job={job} />
  ))}
</JobList>
```

---

## ⏳ 5. UI States _(Very Important)_

> Handle all three states properly:

| State   | Component                           |
| ------- | ----------------------------------- |
| Loading | `{loading && <Loader />}`           |
| Empty   | `{jobs.length === 0 && <NoJobs />}` |
| Error   | `{error && <ErrorMessage />}`       |

---

## 📄 6. Pagination / Load More

> 👉 Simple version — a single button

```jsx
<LoadMoreButton />
```

---

## ⭐ 7. Saved Jobs Preview _(Optional Section)_

> 👉 Small section near the bottom

- Shows **2–3 saved jobs**
- `"View All Saved Jobs"` button

---

## 🔻 8. Footer

**Content:**

- About text
- Links: `GitHub` · `LinkedIn`
- Copyright notice

**Structure:**

```jsx
<Footer>
  <p />
  <Links />
</Footer>
```

---

## 🧱 Final Layout — Visual Flow

```
┌──────────────────────────────────────────────────┐
│  Navbar (logo · global search(CTA) · nav · theme)     │
├──────────────────────────────────────────────────┤
│     Hero (heading + subtext only)       │
├──────────────────────────────────────────────────┤
│                    Filters                       │
├──────────────────────────────────────────────────┤
│          Job Listings (Grid of JobCards)         │
│   [Card]        [Card]        [Card]             │
│   [Card]        [Card]        [Card]             │
├──────────────────────────────────────────────────┤
│                  Load More                       │
├──────────────────────────────────────────────────┤
│          (Optional) Saved Jobs Preview           │
├──────────────────────────────────────────────────┤
│                    Footer                        │
└──────────────────────────────────────────────────┘
```

---

## 📁 Suggested Folder Structure

```
src/
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── Hero/
│   │   └── HeroSection.jsx
│   ├── Filters/
│   │   └── Filters.jsx
│   ├── JobList/
│   │   ├── JobList.jsx
│   │   └── JobCard.jsx
│   ├── States/
│   │   ├── Loader.jsx
│   │   ├── NoJobs.jsx
│   │   └── ErrorMessage.jsx
│   ├── SavedJobs/
│   │   └── SavedJobsPreview.jsx
│   └── Footer/
│       └── Footer.jsx
├── pages/
│   └── Home.jsx
└── App.jsx
```

---

> ✅ **Next Step:** Start building components top-to-bottom — `Navbar` → `Hero` → `Filters` → `JobCard` → `Footer`
