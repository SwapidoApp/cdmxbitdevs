---
layout: post
type: socratic
title: "Seminario Socrático 5"
meetup: https://lu.ma/6oi0vszy
---

# Anuncios

- Bienvenidos al quinto seminario socrático oficial de CDMX Bitcoin Devs en la Casa de Satoshi. El anfitrión es [Gustavo Flores Echaiz](https://x.com/gustavojfe).  
- Nuestros patrocinadores son [Wallet of Satoshi](https://www.walletofsatoshi.com/) y [Librería de Satoshi](https://libreriadesatoshi.com/).  
- Les pedimos que respeten la integridad y la privacidad de los demás. Se aplican las reglas de [Chatham House](https://www.chathamhouse.org/about-us/chatham-house-rule).
- Se fomenta la interacción y las preguntas; por favor, levanten la mano para intervenir.  
- Mantener el enfoque en Bitcoin y tecnologías afines; no se permite la promoción de otras criptomonedas.  

# Noticias de Mercado y Legales

- [El fondo soberano de Abu Dabi revela una inversión de 408 M$ en el ETF de bitcoin de BlackRock](https://bitcoinmagazine.com/news/abu-dhabis-sovereign-wealth-fund-reveals-408-million-investment-in-blackrocks-bitcoin-etf) 
- ([Tweet](https://x.com/BitcoinMagazine/status/1921885610077249614))  
- [Arizona se convierte en el segundo estado en establecer una reserva estratégica de bitcoin](https://bitcoinmagazine.com/news/arizona-becomes-second-state-to-establish-strategic-bitcoin-reserve)  
- [Coinbase adquiere la plataforma de opciones de cripto Deribit por 2,9 B$](https://bitcoinmagazine.com/news/coinbase-to-acquire-bitcoin-and-crypto-options-platform-deribit-for-2-9b)  

# Vulnerabilidades y Hacks

- [BIP30: vulnerabilidad de fallo de consenso](https://bitcoinops.org/en/newsletters/2025/05/09/#bip30-consensus-failure-vulnerability)  
- [CVE-2025-43707: análisis detallado](https://antoinep.com/posts/cve-2025-43707/)  
- [Los datos KYC de los clientes de Coinbase son hackeado](https://x.com/cointelegraph/status/1922977880314654962)  
- [BTCPay Server cae por vulnerabilidad](https://x.com/BtcpayServer/status/1922845019494318519)
    - [PR de NBitcoin corrige vulnerabilidades criptográficas](https://github.com/MetacoSA/NBitcoin/pull/1269)
    - [la causa de la vulnerabilidad BTCPay Server](https://x.com/orangesurfbtc/status/1922805111522206100)

# Cambios Importantes

- [Bitcoin Core #31250 deshabilita la creación y carga de legacy wallets, completando la migración a descriptor wallets](https://github.com/bitcoin/bitcoin/pull/31250)
- [Rust-Bitcoin agrega modulo MuSig2](https://github.com/rust-bitcoin/rust-secp256k1/pull/716)  

# Nuevos Lanzamientos

- [Spark L2 lanza su mainnet](https://x.com/buildonspark)  
- [Citrea lanza su red testnet Clementine](https://www.blog.citrea.xyz/unveiling-clementine/)  
- [Revolut integra Lightspark para pagos Lightning en UK y Europa](https://bitcoinmagazine.com/news/revolut-integrates-lightspark-for-lightning-fast-bitcoin-payments-in-the-uk-and-europe)  
- [Swapido en la App Store de Fedi e integración con WebLN](https://x.com/fedibtc/status/1915725879570804876)  
- [Nueva versión de Mempool para explorar condiciones de transacciones taproot](https://x.com/mempool/status/1911389181101679080)  

# Propuestas e Investigación

- [Asignación de BIP para consensus cleanup soft-fork](https://github.com/bitcoin/bips/pull/1800)  
- [OP_VAULT retirado en favor de OP_CCV](https://github.com/bitcoin/bips/pull/1848)  
- [¿Qué es CCV? (Op_CheckContractVerify)](https://delvingbitcoin.org/t/op-checkcontractverify-and-its-amount-semantic/1527/1)  
- [Thunderbolt: Un protocolo formalmente verificado para transferencias de Bitcoin fuera de la cadena](https://eprint.iacr.org/2025/709.pdf)  

# Becas

- [Mi Primer Bitcoin recibe 1 M$ de Start Small de Jack Dorsey](https://x.com/MyfirstBitcoin_/status/1922287023936647288)  

# Conferencias

- **BTC++**: transmisiones en vivo  
  - https://x.com/i/broadcasts/1LyxBWjzpzLKN  
  - https://x.com/i/broadcasts/1gqxvjqzbYQxB  
  - https://x.com/i/broadcasts/1eaJbWPLBQYxX  
  - https://x.com/i/broadcasts/1BRJjmEyWXVGw

# debate por el limite OP_RETURN

- [“OP_RETURN limits: Bitcoin’s battle over arbitrary data” (Bitcoin Magazine)](https://bitcoinmagazine.com/technical/op_return-limits-bitcoins-battle-over-arbitrary-data)

## Política interna de mempool

- [Waiting for confirmation (Bitcoin Ops Blog) – internal mempool policy](https://bitcoinops.org/en/blog/waiting-for-confirmation/)  
- [instagibbs: gist sobre política interna de mempool](https://gist.github.com/instagibbs/ee32be0126ec132213205b25b80fb3e8)  
- [Conteo de nodos: luke.dashjr.org](https://luke.dashjr.org/programs/bitcoin/files/charts/software.html)  
- [SLIPSTREAM (mara.com)](https://slipstream.mara.com/)  
- [Geyser Relay (geyser.fund)](https://geyser.fund/project/librerelay)

## ¿Qué es OP_RETURN?

- [Definición de OP_RETURN (Bitcoin Magazine Glossary)](https://bitcoinmagazine.com/glossary/op_return)  
- [“DApps or Only Bitcoin Transactions?” (BitMEX blog)](https://blog.bitmex.com/dapps-or-only-bitcoin-transactions-the-2014-debate/)  
- [OP_RETURN_Bot en X](https://x.com/OP_RETURN_Bot)  
- [Ejemplo de transacción non-standard OP_RETURN (mempool.space)](https://mempool.space/tx/ec93ef6935140d3604e8caac1784d2fb21963f279a5243a10c5365a400c4715d)

## Propuestas de eliminar el filtro de tamaño de OP_RETURN en Bitcoin Core

- [Discusión en Google Groups: eliminar filtro límite OP_RETURN](https://groups.google.com/g/bitcoindev/c/d6ZO7gXGYbQ)  
- [PR #32359 (Bitcoin Core)](https://github.com/bitcoin/bitcoin/pull/32359)  
- [PR #32406 (Bitcoin Core)](https://github.com/bitcoin/bitcoin/pull/32406)

## Opiniones a favor de eliminar el filtro

- [DelvingBitcoin: “Addressing community concerns… relaxing standardness limits on OP_RETURN outputs”](https://delvingbitcoin.org/t/addressing-community-concerns-and-objections-regarding-my-recent-proposal-to-relax-bitcoin-cores-standardness-limits-on-op-return-outputs/1697)  
- [instagibbs: gist sobre objeciones y respuestas](https://gist.github.com/instagibbs/c436110890ab25aa9997b13c2270d5ce)  
- [Mailing-list bitcoindev: Wuille responde a objeciones](https://mailing-list.bitcoindevs.xyz/bitcoindev/QMywWcEgJgWmiQzASR17Dt42oLGgG-t3bkf0vzGemDVNVnvVaD64eM34nOQHlBLv8nDmeBEyTXvBUkM2hZEfjwMTrzzoLl1_62MYPz8ZThs=@wuille.net/)  
- [AntoineP: “Relay policy drama”](https://antoinep.com/posts/relay_policy_drama/)  
- [Bitcointalk thread: discusión OP_RETURN limit](https://bitcointalk.org/index.php?topic=5539943.msg65335891#msg65335891)

## Opiniones en contra de eliminar el filtro (o a favor de Knots)

- [Mailing-list bitcoindev: propuesta pro Knots](https://mailing-list.bitcoindevs.xyz/bitcoindev/f4f6831a-d6b8-4f32-8a4e-c0669cc0a7b8n@googlegroups.com/)  
- [Tweet de @cguida6](https://x.com/cguida6/status/1920490816352485727)  
- [Tweet de @bitcoinwifey](https://x.com/bitcoinwifey/status/1920279809210400979)

## Otros eventos

- [Mononautical tweet](https://x.com/mononautical/status/1919090261654638954)  
- [Jimmy Song tweet](https://x.com/jimmysong/status/1922112890980729156)  
- [Stutxo tweet](https://x.com/stutxo/status/1923023753040015687)  
- [CGuida6 tweet](https://x.com/cguida6/status/1922845679677845532)  
- [Lifofifo tweet](https://x.com/lifofifo/status/1922695983512588482)  
- [Rebar Labs Docs](https://docs.rebarlabs.io/)  
- [OttoSch_ tweet](https://x.com/ottosch_/status/1922767643771126018)  
- [Mainnet Observer: OP_RETURN output charts](https://mainnet.observer/charts/output-opreturn-amount/)  
- [Jimmy Song tweet sobre OP_RETURN](https://x.com/jimmysong/status/1922319485941530961)  
- [Freeonlineuser tweet](https://x.com/freeonlineuser/status/1922070187865493599)  