const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns partition key", () => {
    const partitionKey = deterministicPartitionKey({partitionKey: "abc"});
    expect(partitionKey).toBe("abc");
  });

  it ("Returns expected partitionKey", () => {
    const partitionKey = deterministicPartitionKey({
      id: 1,
      name: "john"
    });
    console.log(partitionKey);
    expect(partitionKey).toBe('76c7615331bdc40f9a5d2d4eee2145aea9d0f6efcde5b1cc7aab24abd073333316a140fabc53088f3e86d7db084bad017828631cd5c6a41e50322e037dd55f16');
  })
});
