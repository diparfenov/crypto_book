"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getContactByAddress = function getContactByAddress(address) {
  var contactAddress, contact, telegram, discord, desc;
  return regeneratorRuntime.async(function getContactByAddress$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(contactFactory.ownerToContact(address));

        case 2:
          contactAddress = _context.sent;

          if (!(contactAddress === "0x0000000000000000000000000000000000000000")) {
            _context.next = 5;
            break;
          }

          throw new Error("Такой контакт не найден!");

        case 5:
          console.log("contactAddress:", contactAddress);
          n; //обращаеаемся к контракту типа Contact, передав туда полученный адресс

          contact = Contact(contactAddress); //достаем оттуда значение телегерам

          _context.next = 10;
          return regeneratorRuntime.awrap(contact.telegram());

        case 10:
          telegram = _context.sent;
          console.log("telegram :", telegram); //достаем оттуда значение дискорд

          _context.next = 14;
          return regeneratorRuntime.awrap(contact.discord());

        case 14:
          discord = _context.sent;
          console.log("discord :", discord); //достаем оттуда значение деск

          _context.next = 18;
          return regeneratorRuntime.awrap(contact.desc());

        case 18:
          desc = _context.sent;
          console.log("desc :", desc); //возвращаем значения 

          return _context.abrupt("return", {
            telegram: telegram,
            discord: discord,
            desc: desc
          });

        case 21:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = getContactByAddress;
exports["default"] = _default;