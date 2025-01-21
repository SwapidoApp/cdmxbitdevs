---
layout: post
type: socratic
title: "Seminario Socrático 1"
meetup: https://lu.ma/3qxgdgy5
---

# Anuncios

- Bienvenidos al primer seminario socrático oficial de CDMX Bitcoin Devs en la Casa de Satoshi.
- El 26 de noviembre de 2024, [la Casa de Satoshi anunció](https://x.com/LaCasaDeSatoshi/status/1861502750393049191) el comienzo de eventos sobre asuntos técnicos de Bitcoin. El primer evento tuvo lugar dos días después. Así nació la idea de organizar seminarios socráticos mensuales de CDMX BitDevs.
- Les pedimos que respeten la integridad y la privacidad de los demás. No se tolerarán las faltas de respeto.
- Se fomenta la interacción y las preguntas; por favor, levanten la mano durante una discusión y les daremos la palabra.
- Es muy importante mantener el tema sobre el bitcoin y sus tecnologías relacionadas. No se permite la promoción de otras criptomonedas.
- Se seguirán las reglas de [Chatham House](https://www.chathamhouse.org/about-us/chatham-house-rule).

# Presentación sobre los covenants

- [¿Qué son los covenants?](https://river.com/learn/terms/c/covenants/)
- [Las distintas propuestas de los covenants y la posición de varios desarrolladores](https://en.bitcoin.it/wiki/Covenants_support)
- OP_CAT
  - [¿Qué es OP_CAT?](https://bitcoinops.org/en/topics/op_cat/)
  - [Proposición de mejora de Bitcoin (BIP) de OP_CAT](https://github.com/bitcoin/bips/blob/master/bip-0347.mediawiki)
  - [Demostración de OP_CAT](https://opcat.wtf/)
- OP_CHECKSIGFROMSTACK (OP_CSFS)
  - [¿Qué es OP_CSFS?](https://bitcoinops.org/en/topics/op_checksigfromstack/)
  - [El BIP de OP_CSFS](https://github.com/bitcoin/bips/blob/master/bip-0348.md)
  - [Experimentos con OP_CSFS](https://rubin.io/bitcoin/2024/12/02/csfs-ctv-rekey-symmetry/)
- OP_CHECKTEMPLATEVERIFY (OP_CTV)
  - [¿Qué es OP_CTV?](https://bitcoinops.org/en/topics/op_checktemplateverify)
  - [El BIP de OP_CTV](https://github.com/bitcoin/bips/blob/master/bip-0119.mediawiki)
  - [casos de uso de OP_CTV](https://utxos.org/)
- Ejemplos de Rationales
  - [James O’Beirne](https://x.com/jamesob/status/1867391901910913403)
  - [Ben Carman](https://x.com/benthecarman/status/1867275434376777930)
- [Una tesis sobre los L2s de bitcoin](https://dba.xyz/a-bitcoin-l2-thesis/)
- [Profundiza en tus conocimientos sobre los covenants y su impacto en los L2s](https://petertodd.org/2024/covenant-dependent-layer-2-review)

# Novedades del mes

- [Resumen de 2024 por Bitcoin Optech](https://bitcoinops.org/en/newsletters/2024/12/20/)
- [Nuevas vulnerabilidades sobre los protocolos de coinjoin sin custodia, pero centralizados, como Wasabi/Ginger y Whirlpool/Samourai](https://groups.google.com/g/bitcoindev/c/CbfbEGozG7c/m/w2B-RRdUCQAJ)
- [Código Abierto en Unchained](https://unchained.com/blog/unchained-2024-open-source/)
- [Ataques de desanonimización en coinjoins centralizados](https://groups.google.com/g/bitcoindev/c/CbfbEGozG7c/m/w2B-RRdUCQAJ?pli=1)
- Discrete Log Equality Proofs (DLEQs) con Silent Payments
  - [BIP374: DLEQs](https://bitcoinops.org/en/newsletters/2025/01/03/#bips-1689)
  - [BIP375: Pagar a una dirección Silent Payments con una cartera PSBT de manera segura](https://bitcoinops.org/en/newsletters/2025/01/17/#bips-1687)
- [¿Funcionan los filtros de spam?](https://x.com/oomahq/status/1875339328127431016)
- [Prueba de concepto de Stupot Coinpool](https://x.com/stutxo/status/1873384602552738236)
- [Bull Bitcoin implementa Payjoin](https://www.bullbitcoin.com/blog/bull-bitcoin-wallet-payjoin)
- [BIP349: OP_INTERNALKEY integrado (nuevo covenant)](https://bitcoinops.org/en/newsletters/2024/12/06/#bips-1534)
- [Actualización del BIP ChillDKG: multi sigs del futuro](https://bitcoinops.org/en/newsletters/2025/01/03/#updated-chilldkg-draft)
- [Timelocks Relativos a Nivel de Contrato](https://bitcoinops.org/en/newsletters/2025/01/10/#contract-level-relative-timelocks)
- [¿Cómo se puede actualizar el bitcoin para que sea resistente a la computación cuántica?](https://bitcoinops.org/en/newsletters/2025/01/03/#quantum-computer-upgrade-path)

# Nuevas versiones de software

- [LDK v0.1](https://github.com/lightningdevkit/rust-lightning/releases/tag/v0.1) es una versión importante de esta librería para crear aplicaciones y carteras compatibles con LN. Las nuevas características incluyen soporte para la resolución BIP353 Human Readable Names, y una reducción en los costos de tarifas en la cadena cuando se resuelven múltiples HTLC para un solo cierre forzado de canal.
- [BDK wallet-1.0.0](https://github.com/bitcoindevkit/bdk/releases/tag/wallet-1.0.0) es la primera gran versión de esta librería para construir monederos Bitcoin y otras aplicaciones habilitadas para Bitcoin. El crate original bdk Rust ha sido renombrado a bdk_wallet (con una API estable) y los módulos de capas inferiores han sido extraídos en sus propios crates, incluyendo bdk_chain, bdk_electrum, bdk_esplora, y bdk_bitcoind_rpc.