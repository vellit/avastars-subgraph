import { BigInt } from "@graphprotocol/graph-ts"
import {
  Avastar,
  Approval,
  ApprovalForAll,
  AttributionSet,
  ContractPaused,
  ContractUnpaused,
  ContractUpgrade,
  MetadataContractAddressSet,
  NewPrime,
  NewReplicant,
  NewTrait,
  TraitAccessApproved,
  TraitArtExtended,
  TraitsUsed,
  Transfer
} from "../generated/Avastar/Avastar"
import { ExampleEntity } from "../generated/schema"

export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.owner = event.params.owner
  entity.approved = event.params.approved

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.MAX_PRIMES_PER_SERIES(...)
  // - contract.MAX_PROMO_PRIMES_PER_GENERATION(...)
  // - contract.MAX_REPLICANTS_PER_GENERATION(...)
  // - contract.TOKEN_NAME(...)
  // - contract.TOKEN_SYMBOL(...)
  // - contract.attributionByGeneration(...)
  // - contract.balanceOf(...)
  // - contract.createTrait(...)
  // - contract.getApproved(...)
  // - contract.getAttributionByGeneration(...)
  // - contract.getAvastarWaveByTokenId(...)
  // - contract.getMetadataContractAddress(...)
  // - contract.getPrimeByGenerationAndSerial(...)
  // - contract.getPrimeByTokenId(...)
  // - contract.getPrimeReplicationByTokenId(...)
  // - contract.getReplicantByGenerationAndSerial(...)
  // - contract.getReplicantByTokenId(...)
  // - contract.getTraitArtById(...)
  // - contract.getTraitIdByGenerationGeneAndVariation(...)
  // - contract.getTraitInfoById(...)
  // - contract.getTraitNameById(...)
  // - contract.isApprovedForAll(...)
  // - contract.isAvastarTeleporter(...)
  // - contract.isHashUsedByGeneration(...)
  // - contract.mintPrime(...)
  // - contract.mintReplicant(...)
  // - contract.name(...)
  // - contract.newContractAddress(...)
  // - contract.ownerOf(...)
  // - contract.paused(...)
  // - contract.primeCountByGenAndSeries(...)
  // - contract.renderAvastar(...)
  // - contract.replicantCountByGeneration(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.tokenByIndex(...)
  // - contract.tokenIdByGenerationAndHash(...)
  // - contract.tokenIdByGenerationWaveAndSerial(...)
  // - contract.tokenOfOwnerByIndex(...)
  // - contract.tokenURI(...)
  // - contract.totalSupply(...)
  // - contract.traitIdByGenerationGeneAndVariation(...)
  // - contract.upgraded(...)
}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleAttributionSet(event: AttributionSet): void {}

export function handleContractPaused(event: ContractPaused): void {}

export function handleContractUnpaused(event: ContractUnpaused): void {}

export function handleContractUpgrade(event: ContractUpgrade): void {}

export function handleMetadataContractAddressSet(
  event: MetadataContractAddressSet
): void {}

export function handleNewPrime(event: NewPrime): void {}

export function handleNewReplicant(event: NewReplicant): void {}

export function handleNewTrait(event: NewTrait): void {}

export function handleTraitAccessApproved(event: TraitAccessApproved): void {}

export function handleTraitArtExtended(event: TraitArtExtended): void {}

export function handleTraitsUsed(event: TraitsUsed): void {}

export function handleTransfer(event: Transfer): void {}
