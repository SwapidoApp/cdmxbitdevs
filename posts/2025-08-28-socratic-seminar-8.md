---
layout: post
type: socratic
title: "Seminario Socrático 8"
meetup: https://luma.com/alixoj8t
---

# Anuncios

- Bienvenidos al octavo seminario socrático oficial de CDMX Bitcoin Devs en la Casa de Satoshi. El anfitrión es [Gustavo Flores Echaiz](https://x.com/gustavojfe).
- Nuestros patrocinadores son [Wallet of Satoshi](https://www.walletofsatoshi.com/) y [Librería de Satoshi](https://libreriadesatoshi.com/).  
- Les pedimos que respeten la integridad y la privacidad de los demás.
- Se fomenta la interacción y las preguntas; por favor, levanten la mano para intervenir.  
- Mantener el enfoque en Bitcoin y tecnologías afines; no se permite la promoción de otras criptomonedas.  

# Mercado, Libertad y Política

- [Los fundadores de Samourai Wallet declaran ser culpables de operar un transmisor de dinero que movió más de 200 M$ de fondos ilícitos](https://www.justice.gov/usao-sdny/pr/founders-samourai-wallet-cryptocurrency-mixing-service-plead-guilty)
- [El fundador de Tornado Cash es juzgado culpable de operar un transmisor de dinero que movió más de 1 B$ de fondos ilícitos](https://www.justice.gov/usao-sdny/pr/founder-tornado-cash-crypto-mixing-service-convicted-knowingly-transmitting-criminal)
- [Google quita temporalmente el acceso al Play Store para wallets de auto custodia, pero lo soluciona después de presión de Bitcoiners en X](https://x.com/NewsFromGoogle/status/1955741506440192463)
- [Nueva Zelanda prohíbe los ATMs Cripto en todo el país](https://cointelegraph.com/news/new-zealand-bans-crypto-atms-money-laundering)
- [Kapitalex]

# La Minería de Bitcoin

## Comienza aquí

- [¿Qué es la minería de Bitcoin? por Kraken (español)](https://www.kraken.com/es/learn/what-is-bitcoin-mining)
- [Plataforma educativa con artículos y guías sobre la minería de Braiins](https://learn.braiins.com/en)
- [Índice de precios del hashrate de Bitcoin](https://data.hashrateindex.com/network-data/bitcoin-hashprice-index)
- [Visualizador en tiempo real de la minería de Bitcoin Mempool.Space](https://mempool.space/mining) 
- [Util interactivo de minería de Bitcoin](https://yogh.io/mine/)
- [Stratum.work: Herramienta para monitorear y gestionar operaciones de minería](https://stratum.work/) 
- [ Una completa colección de recursos sobre la minería de Bitcoin curada por Jameson Lopp](https://www.lopp.net/bitcoin-information/mining.html) 

## Novedades de la Mineria

- [¿Monero sufrió un ataque de 51%? ¿Por qué Bitcoin es distinto?](https://www.coindesk.com/business/2025/08/12/qubic-claims-majority-control-of-monero-hashrate-raising-51-attack-fears)
- [Block (Square, CashApp) lanza Proto Mining: nuevos chips para la minería de Bitcoin producidos en EUA](https://bitcoinops.org/en/newsletters/2025/08/22/#proto-mining-hardware-and-software-announced)
  - [Por que es innovador?](https://x.com/bikesandbitcoin/status/1956040176750485837?s=48)
- [Bitmain se viene a Estados Unidos tras aranceles](https://www.reuters.com/world/china/dominant-chinese-makers-bitcoin-mining-machines-set-up-us-production-beat-2025-06-18/)
- [La nueva tendencia de la Minería Individual (solo mining) da resultados para varios participantes](https://cointelegraph.com/news/solo-bitcoin-miners-defy-odds-block-rewards-rise)

# Cambios Importantes

## Bitcoin Core

- [Bitcoin Core habilita el protocolo PCP/NAT-PMP por default para facilitar la experiencia de los nodos en casa](https://bitcoinops.org/en/newsletters/2025/08/01/#bitcoin-core-33004)
- [Bitcoin Core introduce caché cuando computa los hashes de las firmas de transacciones multi-sig para reducir los ataques de hashing cuadrático](https://bitcoinops.org/caen/newsletters/2025/08/15/#bitcoin-core-32473)
    - [Jameson Lopp ha publicado un artículo que explica los ataques de hashing cuadrático](https://blog.lopp.net/slow-block-validation-attacks/)
- [Bitcoin Core agrega la funcionalidad de crear y gastar transacciones TRUC para la implementación de package relay y ephemeral anchors (mejora del funcionamiento de la cerradura de canales Lightning)](https://bitcoinops.org/en/newsletters/2025/08/22/#bitcoin-core-32896)
    - [Datos sobre las transacciones TRUC](https://x.com/mononautical/status/1951856672038662524)
- [Bitcoin Core baja el minrelaytxfee y el incrementalrelayfee a 0.1 sat/vbyte por la normalización de estas transacciones en las últimas semanas en los bloques](https://bitcoinops.org/en/newsletters/2025/08/22/#bitcoin-core-33106)
    - [Esto ha generado fuerte debate, más contexto](https://delvingbitcoin.org/t/changing-the-minimum-relay-feerate/1886/13)

## Lightning

- [LDK implementa BLIP55 para que los LSPs puedan comunicar por webhooks con los clientes y ejecutar async payments](https://bitcoinops.org/en/newsletters/2025/08/01/#ldk-3662)
- [Core Lightning permite pagos bolt12 y BIP353 con su plugin xpay](https://bitcoinops.org/en/newsletters/2025/08/22/#core-lightning-8467)
- [Eclair introduce los canales simples de taproot para mejorar la privacidad de las transacciones y reducir el espacio consumido por ellas en un 17%](https://bitcoinops.org/en/newsletters/2025/08/22/#eclair-3103)
- [Lightspark anuncia integración con el banco digital SoFi (más de 20 M de clientes) para remesas entre EUA y México usando Lightning](https://www.lightspark.com/news/lightspark/sofi-lightspark-announcement)
  - [Por qué el bitcoin es mejor que los stablecoins para los pagos transfronterizos, página 50.](https://epochvc.io/pdf/The-Future-of-Banking-with-Bitcoin-2025.pdf)

## Capas 2 y Sidechains
- [El sidechain Liquid agrega Simplicity](https://blog.blockstream.com/simplicity-launches-on-liquid-mainnet/)
    - [SimplicityHL es un lenguaje de programación similar a Rust que compila en Simplicity](https://bitcoinops.org/en/newsletters/2025/08/22/#simplicityhl-released)
- [ArkadeOS es una extensión de la capa de nivel 2 ARK para crear programas inteligentes encima de Bitcoin](https://arkadeos.com/)
    - [ARK se usó en mainnet para los pagos en la conferencia Baltic HoneyBadger](https://x.com/ArkLabsHQ/status/1955617205967782203)
- [El Automated Market Maker (AMM) de Flashnet se lanza en la capa 2 Spark de Bitcoin](https://x.com/flashnet/status/1954718954204893230)
- [Tether anuncia la integración de USDT en RGB (capa 2 de Bitcoin)](https://www.newswire.ca/news-releases/tether-announces-plan-to-bring-usdt-to-rgb-advancing-native-stablecoins-on-bitcoin-and-lightning-878950254.html)

## Nuevas Versiones

- [Nueva versión de BTCPay Server agrega Miniscript](https://bitcoinops.org/en/newsletters/2025/08/08/#btcpay-server-2-2-0)
- [Nuevo plugin de BTCPay Server permite la integración con LSPs](https://bitcoinops.org/en/newsletters/2025/08/22/#lsp-plugin-for-btcpay-server)
- [Nueva versión de Nunchuk, con soporte para Miniscript](https://x.com/nunchuk_io/status/1960991476671774957)
- [Nueva versión de Floresta, una implementación de un nodo Bitcoin](https://github.com/vinteumorg/Floresta/releases/tag/v0.8.0)
- [Nueva versión de la librería BDK expande el uso de descriptors y mejora la construcción de transacciones](https://github.com/bitcoindevkit/bdk_wallet/releases/tag/wallet-2.1.0)
- [Nueva versión de Fedimint permite lanzar el software de manera más simple](https://github.com/fedimint/fedimint/releases/tag/v0.8.0)
- [Mainnet-observer agrega un visualizador de la distribución de los feerates que pagan las transacciones](https://mainnet.observer/charts/fees-feerate-bands-stacked/)

## Nuevos Lanzamientos

- [Kyoto es una nueva implementación Neutrino (compact block filters)](https://github.com/2140-dev/kyoto)
- [Bitchat es un nuevo chat bluetooth mesh que usa Nostr para comunicar también](https://github.com/permissionlesstech/bitchat)
- [Peer observer es un software open-source que permite analizar el tráfico del protocolo de gossip de la red p2p de nodos Bitcoin](https://bitcoinops.org/en/newsletters/2025/08/22/#peer-observer-tooling-and-call-to-action)
- [Easybitcoinaddress te permite configurar un BIP353 HRN (lightning address de autocustodia e.g. gustavo@swapido.com) con un BOLT12](https://easybitcoinaddress.me/)
- [ Útil interactivo: ¿Qué tan segura es tu frase semilla bitcoin?](https://bennet.org/blog/how-secure-is-your-bitcoin-wallets-mnemonic-seed-phrase/)

# Propuestas e Investigación

## Computación Cuántica

- [Taproot con el key-spend path deshabilitado es resistente a la computación cuántica](https://groups.google.com/g/bitcoindev/c/ydE5u5C0xVc)
- [Se hacen cambios a la propuesta principal BIP360 para usar Taproot con el key-spend path deshabilitado como la principal firma post-cuántica](https://delvingbitcoin.org/t/changes-to-bip-360-pay-to-quantum-resistant-hash-p2qrh/1811/1)
- [Cómo funciona la nueva propuesta Sphincs para firmas bitcoin post-cuánticas por roasbeef (CTO de Lightning Labs)](https://insider.btcpp.dev/p/sphincs)
- [Jameson Lopp publica su propuesta para eliminar por etapas el acceso a direcciones bitcoin vulnerables a la computación cuántica](https://bitcoinops.org/en/newsletters/2025/08/01/#migration-from-quantum-vulnerable-outputs)
    - [El borrador del BIP](https://github.com/jlopp/bips/blob/quantum_migration/bip-post-quantum-migration.mediawiki)

## Más Investigación

- [Nuevo BIP para el compartimiento de block templates para mitigar los problemas de las políticas de mempool (filtros) divergentes tras el crecimiento del uso de Knots y otros cambios en el mercado](https://bitcoinops.org/en/newsletters/2025/08/22/#draft-bip-for-block-template-sharing)
    - [Knots tiene más del 13% de la red por la oposición a los nuevos cambios en los defaults de filtros (mempool policy) en Bitcoin Core](https://luke.dashjr.org/programs/bitcoin/files/charts/software.html)
    - [Se está descubriendo una fuerte divergencia en el mempool, demostrado por las estadísticas sobre la reconstrucción de bloques compactos](https://delvingbitcoin.org/t/stats-on-compact-block-reconstructions/1052/35)
    - [Más contexto sobre la nueva propuesta](https://delvingbitcoin.org/t/sharing-block-templates/1906)
- [Se descubre cómo hacer collaborative custody de manera privada (el proveedor no sabe tus direcciones)](https://bitcoinops.org/en/newsletters/2025/07/25/#chain-code-withholding-for-multisig-scripts)
- [3 nuevos borradores de BIP para Utreexo: una nueva tecnología para sincronizar un nodo de manera más rápida](https://bitcoinops.org/en/newsletters/2025/08/08/#draft-bips-proposed-for-utreexo)
- [AlpenLabs lanza una nueva propuesta llamada Glock, para la verificación de computación offchain (nueva capa 2)](https://x.com/AlpenLabs/status/1957808842558885902)
- [Confidential Script es un nuevo concepto que permite la emulación de Bitcoin scripts off-chain usando un Trusted Execution Environment (TEE)](https://delvingbitcoin.org/t/confidential-script-emulate-soft-forks-using-stateless-tees/1918/1)
- [Una nueva propuesta covenant OP_TEMPLATEHASH que es una variante de OP_CTV nativa para taproot](https://bitcoinops.org/en/newsletters/2025/08/01/#taproot-native-op-templatehash-proposal)

# Financiamiento y Educación

- [Se abre el registro al bootcamp gratis B40S de desarrollo open-source para desarrolladores con más de 2 años de experiencia en América Latina, el Caribe y España](https://b4os.dev/#registro)
- [Desarrolladores Open-Source fundan la fundación Payjoin para mejorar el financiamiento de la tecnología](https://payjoindevkit.org/2025/08/08/announcing-payjoin-foundation/)
- [Nuevo útil para aplicar a varios grants al mismo tiempo para Desarrolladores Open-Source](https://grants.bitcoindevs.xyz/)
- [Blog de OpenSats sobre las librerías para desarrollar con Bitcoin a las cuales contribuyen](https://opensats.org/blog/advancements-in-developer-libraries)
- [BTC++ lanza su newsletter semanal con noticias tecnológicas bitcoin](https://insider.btcpp.dev/)
- [Reporte sobre el futuro del bitcoin banking](https://epochvc.io/pdf/The-Future-of-Banking-with-Bitcoin-2025.pdf)
- [¿Qué ha logrado la comunidad Bitcoin Design en los últimos 5 años?](https://five.bitcoin.design/)

# Conferencias y Eventos

- **BTC++ Riga**
    - [Charlas](https://btcpp.dev/conf/riga/talks)
    - [Día 1](https://www.youtube.com/live/mvuWLob3CFU?si=AS3Zcum216X5n5bw)
    - [Día 2](https://www.youtube.com/watch?v=96n34yZAO1U)
- **Baltic HoneyBadger Conference**
    - [Día 1](https://www.youtube.com/watch?v=W2TJuQ1TWYs)
    - [Día 2](https://www.youtube.com/watch?v=jEPl9Mmth0U)
- **Eventos que se vienen:**
    - [10-11 Septiembre, CDMX: Radical Innovation Summit](https://www.radicalinnovationsummit.com/)
      - [10 Septiembre, tendremos el side-event oficial del Radical Innovation Summit en La Casa de Satoshi](https://luma.com/bwpuuob1?tk=CJAev1)
    - [15-19 Septiembre, SF: Bitcoin Design](https://event.bitcoin.design/)
    - [17-18 Septiembre, Nashville (soldout): Custody Summit](https://bitcoinpark.com/custody-treasury/custody-treasury-summit.html)
    - [23-26 Octubre, Atlanta: TAB Conf](https://6.tabconf.com/)
