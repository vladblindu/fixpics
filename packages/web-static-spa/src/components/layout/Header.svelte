<script>
    import {AppBar, Button, Icon, NavigationDrawer, Overlay} from 'svelte-materialify/src'
    import {mdiAccountCircle, mdiMenu} from '@mdi/js'
    import {appName} from 'config/global.json'
    import AppLogo from 'ext-comp/logo/AppLogo.svelte'
    import SubHeader from './SubHeader.svelte'
    import DrawerContent from './DrawerContent.svelte'

    let drawer = false

    const toggleDrawer = () => {
        drawer = !drawer
    }

    const close = () => {
        drawer = false
    }

    const homeAnchors = [
        'home',
        'about',
        'clients',
        'catalogue',
        'booking process',
        'contact',
    ]
</script>

<AppBar absolute class="primary-color" style="width: 100vw;">
    <div slot="icon">
        <Button class="d-sm-none primary-color" fab depressed on:click={toggleDrawer}>
            <Icon path={mdiMenu}/>
        </Button>
    </div>


    <span class="d-none d-sm-block">
        <a href="/" class="white-text">
            <AppLogo/>
            <b>{appName}</b>
         </a>
    </span>



    <div style="flex-grow:1;display: flex; justify-content: center">
        <span class="d-sm-none ">
        <a href="/" class="white-text">
            <AppLogo/>
         </a>
    </span></div>
    <Button class="primary-color d-none d-sm-block pr-2">
        <Icon path="{mdiAccountCircle}" class="mr-2"/>
        AUTH
    </Button>
    <Button icon class="primary-color d-sm-none pr-2">
        <Icon path="{mdiAccountCircle}"/>
    </Button>
    <div slot="extension">
        <SubHeader class="d-none d-sm-flex" anchors="{homeAnchors}"/>
    </div>
</AppBar>
<div class="d-sm-none">
    <NavigationDrawer class="pt-16  s-navigation-drawer__content " clipped fixed active="{drawer}">
        <DrawerContent anchors="{homeAnchors}" {close}/>
    </NavigationDrawer>
    <Overlay active="{drawer}" absolute on:click={toggleDrawer} index={1}/>

</div>
