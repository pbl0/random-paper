import { Component, OnInit } from "@angular/core";
import { SettingsService } from '../services/settings.service';
import { File } from "@ionic-native/file/ngx";

@Component({
	selector: "app-settings",
	templateUrl: "./settings.page.html",
	styleUrls: ["./settings.page.scss"],
})
export class SettingsPage implements OnInit {
	private cachePath: string = this.file.cacheDirectory + 'walls/';

	constructor(public settingsService: SettingsService, private file: File) {
	}

	ngOnInit() {}

	onIonChange() {
		this.setStorage();
	}

	setStorage() {
    this.settingsService.setStorage();
	}

	deleteCache(){
		// https://forum.ionicframework.com/t/deleting-all-files-from-the-cache-folder-using-file/138502/3
		this.file.listDir(this.file.cacheDirectory,'walls').then((result)=>{

            console.log('files in walls directory: ', result);

            console.log('Started deleting files from cache folder!');

            for(let file of result){

                if(file.isFile == true){

                    this.file.removeFile(this.cachePath, file.name).then( data => {
                        console.log('file removed: ', this.file);
                        data.fileRemoved.getMetadata(function (metadata) {
                            let name = data.fileRemoved.name;
                            let size = metadata.size ;
                            let fullPath = data.fileRemoved.fullPath;
                            console.log('Deleted file: ', name, size, fullPath) ;
                            console.log('Name: ' + name + ' / Size: ' + size) ;
                        }) ;
                    }).catch( error => {
                        file.getMetadata(function (metadata) {
                            let name = file.name ;
                            let size = metadata.size ;
                            console.log('Error deleting file from cache folder: ', error) ;
                            console.log('Name: ' + name + ' / Size: ' + size) ;
                        }) ;
                    });

                }
            }
		}) ;
	}
}
