import { render, screen } from "@testing-library/react";
import Card from "./Card";
import userEvent from "@testing-library/user-event";
const item = {
  name: "Chocolate",
  imagePath: "/images/chocolate.png",
  id: "1afc",
};

test("Miktar,Başlık ve fotoğraf , gelen propa göre ekrana basılır ", () => {
  render(
    <Card
      item={item}
      amount={5}
      addToBasket={() => {}}
      clearFromBasket={() => {}}
    />
  );

  const amount = screen.getByTestId("amount");

  expect(amount.textContent).toBe("5");

  screen.getByText("Chocolate");

  const img = screen.getByAltText("çeşit-resim");
});

test("Butonlara tıklanınca fonksiyonlarla doğru parametrelerle çağrılır", async () => {
  const user = userEvent.setup();

  const addMockFn = jest.fn();
  const clearMockFn = jest.fn();

  render(
    <Card
      item={item}
      amount={3}
      addToBasket={addMockFn}
      clearFromBasket={clearMockFn}
    />
  );

  const addBtn = screen.getByRole("button", { name: /ekle/i });
  const clearBtn = screen.getByRole("button", { name: /sıfırla/i });
  await user.click(addBtn);

  expect(addMockFn).toHaveBeenCalledWith(item);

  await user.click(clearBtn);

  expect(clearMockFn).toHaveBeenCalledWith(item.id);
});
