import { render, screen } from "@testing-library/react";
import Scoops from "./Scoops";
import userEvent from "@testing-library/user-event";

test("API'dan alınan veriler için ekrana kartlar basılır", async () => {
  render(<Scoops />);

  //ekrana basılan kartları al
  const images = await screen.findAllByAltText("çeşit-resim");

  expect(images.length).toBeGreaterThanOrEqual(1);
});

test("Çeşitlerin eklenme ve sıfırlama özellikleri toplam fiyatı etkiler", async () => {
  const user = userEvent.setup();
  render(<Scoops />);

  // Bütün ekleme ve sıfırlama butonlarını çağır
  const addButtons = await screen.findAllByRole("button", { name: /ekle/i });
  const clearButtons = await screen.findAllByRole("button", {
    name: /sıfırla/i,
  });
  const total = screen.getByTestId("total");

  expect(total.textContent).toBe("0 ₺");

  // İlk ürünü ekle
  await user.click(addButtons[0]);
  expect(total.textContent).toBe("20 ₺");

  // Aynı ürünü tekrar ekle
  await user.click(addButtons[0]);
  expect(total.textContent).toBe("40 ₺");

  // İlk ürünü sıfırla
  await user.click(clearButtons[0]);
  expect(total.textContent).toBe("0 ₺");
});
