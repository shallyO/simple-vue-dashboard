<script>

</script>

<template>
    <div id="scrollbar">
                    <div class="container-fluid">

                        <div id="two-column-menu">
                        </div>
                        <ul class="navbar-nav" id="navbar-nav">
                            <li class="menu-title"><span data-key="t-menu">Menu</span></li>
                            <li class="nav-item">
                                <RouterLink to="/dashboard" class="nav-link menu-link" 
                                    aria-expanded="false" aria-controls="sidebarDashboards">
                                    <i class="ri-home-line"></i> <span data-key="t-dashboards">Dashboard</span>
                                </RouterLink>
                            </li>
                            <li class="menu-title"><i class="ri-more-fill"></i> <span data-key="t-components">Transactions</span></li>

                            <li class="nav-item">
                                <RouterLink to="/deposit" class="nav-link menu-link" >
                                    <i class=" ri-hand-coin-line "></i> <span data-key="t-widgets">Deposit</span>
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/withdraw" class="nav-link menu-link">
                                    <i class="  ri-bank-card-fill  "></i> <span data-key="t-widgets">Withdraw</span>
                                </RouterLink>
                            </li>
                             <li class="nav-item">
                                <RouterLink to="/transfer" class="nav-link menu-link">
                                    <i class=" ri-swap-box-line "></i> <span data-key="t-widgets">Transfer</span>
                                </RouterLink>
                            </li>

                          <li class="nav-item">
                               <RouterLink to="/"  class="nav-link menu-link">
                                    <i
                                class="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span data-key="t-widgets">Logout</span>
                               </RouterLink>
                            </li>
                        </ul>
                    </div>
                    <!-- Sidebar -->
                </div>
</template>