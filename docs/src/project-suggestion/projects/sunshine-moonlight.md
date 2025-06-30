# Sunshine / Moonlight
一套自托管的串流服务

## Sunshine

| 名称 | Sunshine                                                                                 |
|----|------------------------------------------------------------------------------------------|
| 平台 | <PlatformWindows text="Windows 10+"/> <PlatformLinux/> <PlatformMacOS text="MacOS 13+"/> |
| 链接 | <ProjectSourceGithub project="LizardByte/Sunshine"/>                                     |
| 协议 | GPL-3.0                                                                                  |

| 食用方法           | 特殊值                                                 |
|----------------|-----------------------------------------------------|
| Winget         | <ProjectDownloadWinget name="LizardByte.Sunshine"/> |
| Arch Linux CN  | <ProjectDownloadArchLinuxCN name="sunshine"/>       |
| Arch Linux AUR | <ProjectDownloadAUR name="sunshine-bin"/>           |

Sunshine 是串流的服务端, 配置好后就可以在 Moonlight 上开始串流了

你需要在 Sunshine 的托盘图标中右键 点击 "Open Sunshine" 以打开 Sunshine 的 WebUI <br/>
然后设置一个用户名和密码, 以后打开 WebUI 时都会需要 <br/>
可以在 Configuration -> General -> Locale 中设置 WebUI 的语言为中文

如果遇到了问题 可以查看 [官方 Troubleshooting](https://docs.lizardbyte.dev/projects/sunshine/latest/md_docs_2troubleshooting.html)

### 配置 KMS 捕获 <PlatformLinux/>

大部分 Wayland 桌面环境都需要允许 KMS 捕获才能工作

使用以下命令允许 Sunshine 进行 KMS 捕获

```bash
sudo setcap cap_sys_admin+p $(readlink -f $(which sunshine))
```

### 自启动服务 <PlatformLinux/>

Sunshine 默认创建了一个服务 用于自启动, 使用以下命令来启用此服务

```bash
systemctl --user enable sunshine
```

## Moonlight
