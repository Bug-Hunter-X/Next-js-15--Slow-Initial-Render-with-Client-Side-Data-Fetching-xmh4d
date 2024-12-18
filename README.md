# Next.js 15 Slow Initial Render Bug

This repository demonstrates an uncommon performance issue in a Next.js 15 application involving client-side data fetching. The `about.js` page simulates a slow API call using `setTimeout`, resulting in a noticeable delay before the content is displayed.  This delay negatively impacts the user experience.

## Problem
The initial render of the About page is slow due to the client-side data fetching. Users see a 'Loading...' message for 2 seconds before the actual content appears.

## Solution
The solution involves using techniques like `getServerSideProps` or `getStaticProps` to fetch data on the server-side, which avoids client-side delays. 

See `about-solution.js` for the improved code.