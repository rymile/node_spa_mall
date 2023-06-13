const express = require("express");
const router = express.Router();
const Cart = require("../schemas/cart.js");
const Goods = require("../schemas/goods.js");

router.get("/carts", async (req, res) => {
  const carts = await Cart.find({});
  // [
  // {goodsId, quantity}
  // ]
  const goodsId = carts.map((cart) => {
    return cart.goodsId;
  });

  const goods = await Goods.find({ goodsId: goodsId });
  //Goods에 해당하는 모든 정보를 가지오 올건데
  // 만약 goodsIds 변수 안에 존재하는 값일 때에만 조회하라.

  const results = carts.map((cart) => {
    return {
      quantity: cart.quantity,
      goods: goods.find((item) => item.goodsId === cart.goodsId),
    };
  });

  res.json({
    carts: results,
  });
});

module.exports = router;
