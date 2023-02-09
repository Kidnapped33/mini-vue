import { reactive } from "../reactive";
// reactive 响应式对象

describe("reactive", () => {
  it("happy path", () => {
    const original = { foo: 1 };
    const obs = reactive(original);

    // 不是原来的对象
    expect(obs).not.toBe(original);

    // 值和原来对象一样
    expect(obs.foo).toBe(1);
  });
});
