import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./Form";

test("Koşulların onaylanmasına göre buton aktifliği", () => {
  //önce render
  // 1) test edilecek bileşen render edilir
  render(<Form />);
  // 2) gerekli elemanları çağır (button | checkbox)
  const button = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");
  // 3) checkbox tiklenmemiştir
  expect(checkbox).not.toBeChecked();
  // 4) butonun inaktitir
  expect(button).toBeDisabled();

  // 5) checkbox'ı tikle
  fireEvent.click(checkbox);
  // 6) buton aktif mi kontrol et
  expect(button).toBeEnabled();
  // 7) checboxtan tiki kaldır
  fireEvent.click(checkbox);
  // 8) buton inaktiftir
  expect(button).toBeDisabled();
});

test("Butonun hover durumuna göre bildirim gözükür", () => {
  //1 formu renderla
  render(<Form />);

  //2) elemanları getir

  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");
  const alert = screen.getByText(/size gerçekten/i);
  //3) checkboku tikle
  fireEvent.click(checkbox);
  //ekranda bildirim yokmu kontrol et
  expect(alert).toBeVisible;

  //mouse'u butonun üstüne getir
  fireEvent.mouseEnter(button);
  //ekranda bildirim var mı kontrol et
  expect(alert).toBeVisible();
  //mause'u ekrandan çek
  fireEvent.mouseLeave(button);
  //ekrandan bildirim gitti mi
  expect(alert).not.toBeVisible();
});
