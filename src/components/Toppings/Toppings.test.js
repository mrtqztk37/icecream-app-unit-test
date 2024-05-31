import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import Toppings from "./Toppings";

test("sosları ekleme ve çıkarma işleminin toplam fiyata etkisi", async () => {
  const user = userEvent.setup();
  render(<Toppings />);

  //sosların checkboxlarını al

  const toppings = await screen.findAllByRole("checkbox");
  //toplam spanı al

  const total = screen.getByTestId("total");

  //checkbozxlar inaktif mi
  toppings.forEach((i) => expect(i).not.toBeChecked);

  //toplam ücret sıfır mı
  expect(total.textContent).toBe("0");
  //soslardan birini bas
  await user.click(toppings[0]);
  //toplam fiyat 3 mü
  expect(total.textContent).toBe("3");

  // soslardan birini daha tikel
  await user.click(toppings[4]);
  //toplam fiyat 6 mı
  expect(total.textContent).toBe("6");
  //ilk tikleneni kaldır
  await user.click(toppings[0]);
  //fiyat 3 mü
  expect(total.textContent).toBe("3");
  //iiikinciyi kaldır
  await user.click(toppings[4]);
  //toplam fiyat 0 mı
  expect(total.textContent).toBe("0");
});
