const calculateTotal = (items) => {
  return items.map(item => {
    item.total = Number(((item.price * item.quantity) * (1 - item.discount)).toFixed(2))

    return item
  })
}

module.exports = calculateTotal


