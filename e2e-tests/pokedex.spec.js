const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Pokedex', () => {
  beforeEach(async ({ page }) => {
    await page.goto('')
  })

  test('front page can be opened', async ({ page }) => {
    // await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('pokemon page can be navigated to', async ({ page }) => {
    await page.getByRole('link', { name: 'ivysaur' }).click()
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })

})

describe('Health endpoint', () => {
  test('GET /health should return "ok"', async ({ page, request }) => {
  // await page.goto('/health')
  // await expect(page.getByText(/^ok$/)).toBeVisible()
    const response = await request.get('/health')
    const text = await response.text()
    console.log("response text: ", text)
    expect(response.status()).toBe(200)
    // const text = await response.text()
  // expect(text).toBe('ok')
    // const response = await page.goto('/health')
    // const body =  await response.text()
    // // console.log(' response body ',body)
    // expect(body).toMatch(/ok/)
  })
})