import { test, expect } from '@playwright/test'

// ─── Navbar ───────────────────────────────────────────────────────────────────

test.describe('Navbar', () => {
  test.beforeEach(async ({ page }) => { await page.goto('/') })

  test('shows logo', async ({ page }) => {
    await expect(page.getByRole('navigation').getByText('Agrofini')).toBeVisible()
  })

  test('has Home, Invest, Contact links', async ({ page }) => {
    const nav = page.getByRole('navigation')
    await expect(nav.getByRole('link', { name: 'Home' }).first()).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Invest' }).first()).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Contact' }).first()).toBeVisible()
  })

  test('"Invest Now" button links to /invest', async ({ page }) => {
    const btn = page.getByRole('navigation').getByRole('link', { name: 'Invest Now' }).first()
    await expect(btn).toBeVisible()
    await expect(btn).toHaveAttribute('href', '/invest')
  })

  test('navigates to Invest page', async ({ page }) => {
    await page.getByRole('navigation').getByRole('link', { name: 'Invest' }).first().click()
    await expect(page).toHaveURL('/invest')
  })

  test('navigates to Contact page', async ({ page }) => {
    await page.getByRole('navigation').getByRole('link', { name: 'Contact' }).first().click()
    await expect(page).toHaveURL('/contact')
  })
})

// ─── Home page ────────────────────────────────────────────────────────────────

test.describe('Home page', () => {
  test.beforeEach(async ({ page }) => { await page.goto('/') })

  test('hero headline is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Rooted in Purpose/i })).toBeVisible()
  })

  test('hero subheading is visible', async ({ page }) => {
    await expect(page.getByText(/An integrated agribusiness building Nigeria/i)).toBeVisible()
  })

  test('"Our Story" button scrolls to Who We Are', async ({ page }) => {
    await page.getByRole('link', { name: 'Our Story' }).click()
    await expect(page.locator('#who-we-are')).toBeInViewport({ ratio: 0.3 })
  })

  test('"Invest With Us" button links to /invest', async ({ page }) => {
    const btn = page.getByText('Invest With Us')
    await expect(btn).toHaveAttribute('href', '/invest')
  })

  test('Who We Are section has correct heading and body text', async ({ page }) => {
    const section = page.locator('#who-we-are')
    await expect(section.getByRole('heading', { name: /Born from Passion/i })).toBeVisible()
    await expect(section.getByText(/emerging integrated agribusiness/i)).toBeVisible()
    await expect(section.getByText(/Primepoint Farm Estate Limited/i)).toBeVisible()
  })

  test('What We Do shows all 4 service cards', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Greenhouse Farming' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Fish Farming' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Poultry Production' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Agro-Integrated Technologies' })).toBeVisible()
  })

  test('Our Vision quote is present', async ({ page }) => {
    await expect(page.getByText(/Building supply chains that feed the giants/i)).toBeVisible()
  })

  test('Land Stats shows all 4 stats', async ({ page }) => {
    await expect(page.getByText('2 Hectares')).toBeVisible()
    await expect(page.getByText('39 Acres')).toBeVisible()
    await expect(page.getByText('50 Acres')).toBeVisible()
    await expect(page.getByText('Obafemi-Owode').first()).toBeVisible()
  })

  test('Invest teaser banner is visible with CTA', async ({ page }) => {
    await expect(page.getByText(/We.re raising our first round/i)).toBeVisible()
    const cta = page.getByRole('link', { name: /Explore Investment/i })
    await expect(cta).toBeVisible()
    await expect(cta).toHaveAttribute('href', '/invest')
  })

  test('footer disclaimer is present', async ({ page }) => {
    await expect(page.getByText(/Nothing herein constitutes a financial guarantee/i).first()).toBeVisible()
  })
})

// ─── Invest page ──────────────────────────────────────────────────────────────

test.describe('Invest page', () => {
  test.beforeEach(async ({ page }) => { await page.goto('/invest') })

  test('hero heading is correct', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Be Part of Something That Feeds a Nation/i })).toBeVisible()
  })

  test('hero subheading mentions first round', async ({ page }) => {
    await expect(page.getByText(/opening its first round of investment/i)).toBeVisible()
  })

  test('Opportunity section mentions 2-hectare land', async ({ page }) => {
    await expect(page.getByText(/2-hectare farmland/i)).toBeVisible()
    await expect(page.getByText(/Primepoint Farm Estate/i).first()).toBeVisible()
  })

  test('Vision section mentions 600 acres', async ({ page }) => {
    await expect(page.getByText(/600 acres/i).first()).toBeVisible()
  })

  test('Why Invest shows 3 cards with correct titles', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Early Mover Advantage' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Formally Structured' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Clear Expansion Roadmap' })).toBeVisible()
  })

  test('RC number appears on page', async ({ page }) => {
    await expect(page.getByText(/RC No\. 8181060/i).first()).toBeVisible()
  })

  test('Trust section shows all 4 compliance cards', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /RC Registered/i })).toBeVisible()
    await expect(page.getByRole('heading', { name: /SEC Compliance/i })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Regulated Investment Partners/i })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Structured Investment Notes/i })).toBeVisible()
  })

  test('Investment timeline shows all 3 phases', async ({ page }) => {
    await expect(page.getByText(/Farm Setup & Infrastructure/i)).toBeVisible()
    await expect(page.getByText(/First Harvest & Revenue/i)).toBeVisible()
    await expect(page.getByText(/Land Expansion & Corporate Partnerships/i)).toBeVisible()
  })

  test('"Express Investment Interest" links to mailto', async ({ page }) => {
    const btn = page.getByRole('link', { name: /Express Investment Interest/i })
    await expect(btn).toBeVisible()
    await expect(btn).toHaveAttribute('href', 'mailto:info@agrofiniholdings.com')
  })

  test('disclaimer box mentions pre-operational phase', async ({ page }) => {
    await expect(page.getByText(/pre-operational phase/i)).toBeVisible()
    await expect(page.getByText(/independent due diligence/i)).toBeVisible()
  })
})

// ─── Contact page ─────────────────────────────────────────────────────────────

test.describe('Contact page', () => {
  test.beforeEach(async ({ page }) => { await page.goto('/contact') })

  test('page heading is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible()
  })

  test('shows correct email address in main content', async ({ page }) => {
    await expect(
      page.getByRole('main').getByRole('link', { name: 'info@agrofiniholdings.com' })
    ).toBeVisible()
  })

  test('shows full farm address', async ({ page }) => {
    const main = page.getByRole('main')
    await expect(main.getByText(/Block B, Plot 6/i)).toBeVisible()
    await expect(main.getByText(/Prymepoint Farm Estate/i)).toBeVisible()
    await expect(main.getByText(/Obafemi-Owode LGA/i).first()).toBeVisible()
  })

  test('OpenStreetMap iframe is present', async ({ page }) => {
    await expect(page.getByTitle(/Agrofini farm location/i)).toBeVisible()
  })

  test('form has all required fields', async ({ page }) => {
    await expect(page.locator('#name')).toBeVisible()
    await expect(page.locator('#email')).toBeVisible()
    await expect(page.locator('#phone')).toBeVisible()
    await expect(page.locator('#subject')).toBeVisible()
    await expect(page.locator('#message')).toBeVisible()
  })

  test('subject dropdown has all 4 options', async ({ page }) => {
    const select = page.getByLabel(/Subject/i)
    await expect(select.getByRole('option', { name: 'General Enquiry' })).toBeAttached()
    await expect(select.getByRole('option', { name: 'Investment Interest' })).toBeAttached()
    await expect(select.getByRole('option', { name: 'Partnership' })).toBeAttached()
    await expect(select.getByRole('option', { name: 'Media' })).toBeAttached()
  })

  test('form submit shows success message', async ({ page }) => {
    await page.locator('#name').fill('Test User')
    await page.locator('#email').fill('test@example.com')
    await page.locator('#message').fill('This is a test message.')
    // Dispatch submit event directly to avoid Playwright treating button click as navigation
    await page.evaluate(() => {
      const form = document.querySelector('form[name="contact"]') as HTMLFormElement
      form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
    })
    await expect(page.getByText(/Thank you for reaching out/i)).toBeVisible({ timeout: 5000 })
  })

  test('submit button is present and enabled on fresh load', async ({ page }) => {
    await page.goto('/contact')
    const btn = page.getByRole('button', { name: /Send Message/i })
    await expect(btn).toBeVisible()
    await expect(btn).not.toBeDisabled()
  })
})

// ─── Footer ───────────────────────────────────────────────────────────────────

test.describe('Footer', () => {
  test.beforeEach(async ({ page }) => { await page.goto('/') })

  test('shows Agrofini brand name in footer', async ({ page }) => {
    await expect(page.locator('footer').getByText('Agrofini').first()).toBeVisible()
  })

  test('shows RC number in footer', async ({ page }) => {
    await expect(page.locator('footer').getByText(/RC No\. 8181060/i)).toBeVisible()
  })

  test('shows copyright line', async ({ page }) => {
    await expect(page.getByText(/© 2025 Agrofini West Africa Limited/i)).toBeVisible()
  })

  test('Font Awesome attribution link is present', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Font Awesome' })
    await expect(link).toBeVisible()
    await expect(link).toHaveAttribute('href', 'https://fontawesome.com')
  })

  test('OpenStreetMap attribution link is present', async ({ page }) => {
    await expect(page.getByRole('link', { name: /OpenStreetMap contributors/i })).toBeVisible()
  })

  test('nav links work from footer', async ({ page }) => {
    await page.locator('footer').getByRole('link', { name: 'Invest' }).click()
    await expect(page).toHaveURL('/invest')
  })
})
