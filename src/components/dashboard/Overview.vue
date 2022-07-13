<script setup>
    import { useUserStore } from "@/stores/user";

    const store = useUserStore();
    const accountBalance = store.accountBalance;

</script>

<template>
    <div class="row">
        <div class="col-xxl-5">
            <div class="d-flex flex-column h-100">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card card-animate">
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <p class="fw-medium text-muted mb-0">Wallet Balance</p>
                                        <h2 class="mt-4 ff-secondary fw-semibold"><span
                                                class="counter-value" data-target="28.05">&#x20A6; {{ accountBalance }}</span></h2>
                                        <p class="mb-0 text-muted"><span
                                                class="badge bg-light text-success mb-0">
                                            </span> </p>
                                    </div>
                                    <div>
                                        <div class="avatar-sm flex-shrink-0">
                                           
                                        </div>
                                    </div>
                                </div>
                            </div><!-- end card body -->
                        </div> <!-- end card-->
                    </div> <!-- end col-->

                    <div class="col-md-6">
                        <div class="card card-animate">
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <p class="fw-medium text-muted mb-0">Account Type</p>
                                        <h2 class="mt-4 ff-secondary fw-semibold"><span
                                                class="counter-value" data-target="97.66">Savings</span></h2>
                                        <p class="mb-0 text-muted">

                                        </p>
                                    </div>
                                    <div>
                                        <div class="avatar-sm flex-shrink-0">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div><!-- end card body -->
                        </div> <!-- end card-->
                    </div> <!-- end col-->
                </div> <!-- end row-->

            </div>
        </div> <!-- end col-->

    </div> <!-- end row-->

</template>