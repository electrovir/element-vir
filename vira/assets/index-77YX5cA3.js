(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var De=(e=>(e.ElementExample="element-example",e.Page="page",e.Root="root",e))(De||{});function J(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Qm(e){return J(e).filter(t=>isNaN(Number(t)))}function $t(e){return Qm(e).map(n=>e[n])}var Xm=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,ep=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,tp=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,Ys={Space_Separator:Xm,ID_Start:ep,ID_Continue:tp},Js={isSpaceSeparator(e){return typeof e=="string"&&Ys.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||Ys.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||Ys.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}},np=function(t,n,r){const i=[];let s="",o,a,u="",l;if(n!=null&&typeof n=="object"&&!Array.isArray(n)&&(r=n.space,l=n.quote,n=n.replacer),typeof n=="function")a=n;else if(Array.isArray(n)){o=[];for(const D of n){let $;typeof D=="string"?$=D:(typeof D=="number"||D instanceof String||D instanceof Number)&&($=String(D)),$!==void 0&&o.indexOf($)<0&&o.push($)}}return r instanceof Number?r=Number(r):r instanceof String&&(r=String(r)),typeof r=="number"?r>0&&(r=Math.min(10,Math.floor(r)),u="          ".substr(0,r)):typeof r=="string"&&(u=r.substr(0,10)),f("",{"":t});function f(D,$){let A=$[D];switch(A!=null&&(typeof A.toJSON5=="function"?A=A.toJSON5(D):typeof A.toJSON=="function"&&(A=A.toJSON(D))),a&&(A=a.call($,D,A)),A instanceof Number?A=Number(A):A instanceof String?A=String(A):A instanceof Boolean&&(A=A.valueOf()),A){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof A=="string")return c(A);if(typeof A=="number")return String(A);if(typeof A=="object")return Array.isArray(A)?y(A):d(A)}function c(D){const $={"'":.1,'"':.2},A={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let F="";for(let _=0;_<D.length;_++){const G=D[_];switch(G){case"'":case'"':$[G]++,F+=G;continue;case"\0":if(Js.isDigit(D[_+1])){F+="\\x00";continue}}if(A[G]){F+=A[G];continue}if(G<" "){let ve=G.charCodeAt(0).toString(16);F+="\\x"+("00"+ve).substring(ve.length);continue}F+=G}const I=l||Object.keys($).reduce((_,G)=>$[_]<$[G]?_:G);return F=F.replace(new RegExp(I,"g"),A[I]),I+F+I}function d(D){if(i.indexOf(D)>=0)throw TypeError("Converting circular structure to JSON5");i.push(D);let $=s;s=s+u;let A=o||Object.keys(D),F=[];for(const _ of A){const G=f(_,D);if(G!==void 0){let ve=p(_)+":";u!==""&&(ve+=" "),ve+=G,F.push(ve)}}let I;if(F.length===0)I="{}";else{let _;if(u==="")_=F.join(","),I="{"+_+"}";else{let G=`,
`+s;_=F.join(G),I=`{
`+s+_+`,
`+$+"}"}}return i.pop(),s=$,I}function p(D){if(D.length===0)return c(D);const $=String.fromCodePoint(D.codePointAt(0));if(!Js.isIdStartChar($))return c(D);for(let A=$.length;A<D.length;A++)if(!Js.isIdContinueChar(String.fromCodePoint(D.codePointAt(A))))return c(D);return D}function y(D){if(i.indexOf(D)>=0)throw TypeError("Converting circular structure to JSON5");i.push(D);let $=s;s=s+u;let A=[];for(let I=0;I<D.length;I++){const _=f(String(I),D);A.push(_!==void 0?_:"null")}let F;if(A.length===0)F="[]";else if(u==="")F="["+A.join(",")+"]";else{let I=`,
`+s,_=A.join(I);F=`[
`+s+_+`,
`+$+"]"}return i.pop(),s=$,F}};const rp={stringify:np};var pf=rp;function m(e){try{return pf.stringify(e)}catch{return String(e)}}const ip=[".",":",";",",","?","!"],sp=new RegExp(`[${ip.join("")}]+$`);function yu(e){return e.replace(sp,"")}function Ce(e){return e?e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):typeof e=="string"?e:m(e):""}function zr(...e){const t=(Array.isArray(e[0])?e[0]:e).filter(r=>r&&yu(r));return t.length===1?t[0]:t.length?t.map((r,i)=>i===t.length-1?r:yu(r)).join(": "):""}function Pe(e){return e instanceof Error?e:new Error(Ce(e))}function Gr(e,t){const n=Pe(e);return n.message=zr(t,n.message),n}var bu;(function(e){e.Get="GET",e.Head="HEAD",e.Options="OPTIONS",e.Trace="TRACE",e.Put="PUT",e.Delete="DELETE",e.Post="POST",e.Patch="PATCH",e.Connect="CONNECT"})(bu||(bu={}));var b;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(b||(b={}));var N;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(N||(N={}));N.ClientError,N.ServerError;b.Continue+"",N.Information,b.SwitchingProtocols+"",N.Information,b.Processing+"",N.Information,b.EarlyHints+"",N.Information,b.Ok+"",N.Success,b.Created+"",N.Success,b.Accepted+"",N.Success,b.NonAuthoritativeInformation+"",N.Success,b.NoContent+"",N.Success,b.ResetContent+"",N.Success,b.PartialContent+"",N.Success,b.MultiStatus+"",N.Success,b.AlreadyReported+"",N.Success,b.ImUsed+"",N.Success,b.MultipleChoices+"",N.Redirect,b.MovedPermanently+"",N.Redirect,b.Found+"",N.Redirect,b.SeeOther+"",N.Redirect,b.NotModified+"",N.Redirect,b.UseProxy+"",N.Redirect,b.Unused+"",N.Redirect,b.TemporaryRedirect+"",N.Redirect,b.PermanentRedirect+"",N.Redirect,b.BadRequest+"",N.ClientError,b.Unauthorized+"",N.ClientError,b.PaymentRequired+"",N.ClientError,b.Forbidden+"",N.ClientError,b.NotFound+"",N.ClientError,b.MethodNotAllowed+"",N.ClientError,b.NotAcceptable+"",N.ClientError,b.ProxyAuthenticationRequired+"",N.ClientError,b.RequestTimeout+"",N.ClientError,b.Conflict+"",N.ClientError,b.Gone+"",N.ClientError,b.LengthRequired+"",N.ClientError,b.PreconditionFailed+"",N.ClientError,b.PayloadTooLarge+"",N.ClientError,b.UriTooLong+"",N.ClientError,b.UnsupportedMediaType+"",N.ClientError,b.RangeNotSatisfiable+"",N.ClientError,b.ExpectationFailed+"",N.ClientError,b.ImATeapot+"",N.ClientError,b.MisdirectedRequest+"",N.ClientError,b.UnprocessableContent+"",N.ClientError,b.Locked+"",N.ClientError,b.FailedDependency+"",N.ClientError,b.TooEarly+"",N.ClientError,b.UpgradeRequired+"",N.ClientError,b.PreconditionRequired+"",N.ClientError,b.TooManyRequests+"",N.ClientError,b.RequestHeaderFieldsTooLarge+"",N.ClientError,b.UnavailableForLegalReasons+"",N.ClientError,b.InternalServerError+"",N.ServerError,b.NotImplemented+"",N.ServerError,b.BadGateway+"",N.ServerError,b.ServiceUnavailable+"",N.ServerError,b.GatewayTimeout+"",N.ServerError,b.HttpVersionNotSupported+"",N.ServerError,b.VariantAlsoNegotiates+"",N.ServerError,b.InsufficientStorage+"",N.ServerError,b.LoopDetected+"",N.ServerError,b.NotExtended+"",N.ServerError,b.NetworkAuthenticationRequired+"",N.ServerError;const Fi={[N.Information]:[b.Continue,b.SwitchingProtocols,b.Processing,b.EarlyHints],[N.Success]:[b.Ok,b.Created,b.Accepted,b.NonAuthoritativeInformation,b.NoContent,b.ResetContent,b.PartialContent,b.MultiStatus,b.AlreadyReported,b.ImUsed],[N.Redirect]:[b.MultipleChoices,b.MovedPermanently,b.Found,b.SeeOther,b.NotModified,b.UseProxy,b.Unused,b.TemporaryRedirect,b.PermanentRedirect],[N.ClientError]:[b.BadRequest,b.Unauthorized,b.PaymentRequired,b.Forbidden,b.NotFound,b.MethodNotAllowed,b.NotAcceptable,b.ProxyAuthenticationRequired,b.RequestTimeout,b.Conflict,b.Gone,b.LengthRequired,b.PreconditionFailed,b.PayloadTooLarge,b.UriTooLong,b.UnsupportedMediaType,b.RangeNotSatisfiable,b.ExpectationFailed,b.ImATeapot,b.MisdirectedRequest,b.UnprocessableContent,b.Locked,b.FailedDependency,b.TooEarly,b.UpgradeRequired,b.PreconditionRequired,b.TooManyRequests,b.RequestHeaderFieldsTooLarge,b.UnavailableForLegalReasons],[N.ServerError]:[b.InternalServerError,b.NotImplemented,b.BadGateway,b.ServiceUnavailable,b.GatewayTimeout,b.HttpVersionNotSupported,b.VariantAlsoNegotiates,b.InsufficientStorage,b.LoopDetected,b.NotExtended,b.NetworkAuthenticationRequired]};function gf({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}let wf=class{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,n)=>{this.resolve=r=>(this.isSettled=!0,t(r)),this.reject=r=>{this.isSettled=!0,n(Pe(r))}})}};class Dn extends Error{}class op extends Dn{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class ap extends Dn{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class up extends Dn{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class In extends Dn{}class yf extends Dn{constructor(t){super(`Invalid unit ${t}`)}}class ye extends Dn{}class Rt extends Dn{constructor(){super("Zone is an abstract class")}}const M="numeric",ut="short",qe="long",_i={year:M,month:M,day:M},bf={year:M,month:ut,day:M},lp={year:M,month:ut,day:M,weekday:ut},Ef={year:M,month:qe,day:M},Df={year:M,month:qe,day:M,weekday:qe},vf={hour:M,minute:M},Af={hour:M,minute:M,second:M},$f={hour:M,minute:M,second:M,timeZoneName:ut},Cf={hour:M,minute:M,second:M,timeZoneName:qe},kf={hour:M,minute:M,hourCycle:"h23"},Sf={hour:M,minute:M,second:M,hourCycle:"h23"},Ff={hour:M,minute:M,second:M,hourCycle:"h23",timeZoneName:ut},Tf={hour:M,minute:M,second:M,hourCycle:"h23",timeZoneName:qe},Mf={year:M,month:M,day:M,hour:M,minute:M},Nf={year:M,month:M,day:M,hour:M,minute:M,second:M},xf={year:M,month:ut,day:M,hour:M,minute:M},Bf={year:M,month:ut,day:M,hour:M,minute:M,second:M},cp={year:M,month:ut,day:M,weekday:ut,hour:M,minute:M},Pf={year:M,month:qe,day:M,hour:M,minute:M,timeZoneName:ut},Lf={year:M,month:qe,day:M,hour:M,minute:M,second:M,timeZoneName:ut},If={year:M,month:qe,day:M,weekday:qe,hour:M,minute:M,timeZoneName:qe},Rf={year:M,month:qe,day:M,weekday:qe,hour:M,minute:M,second:M,timeZoneName:qe};class Kr{get type(){throw new Rt}get name(){throw new Rt}get ianaName(){return this.name}get isUniversal(){throw new Rt}offsetName(t,n){throw new Rt}formatOffset(t,n){throw new Rt}offset(t){throw new Rt}equals(t){throw new Rt}get isValid(){throw new Rt}}let Hs=null;class as extends Kr{static get instance(){return Hs===null&&(Hs=new as),Hs}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return Gf(t,n,r)}formatOffset(t,n){return vr(this.offset(t),n)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}let Ti={};function fp(e){return Ti[e]||(Ti[e]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),Ti[e]}const dp={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function hp(e,t){const n=e.format(t).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),[,i,s,o,a,u,l,f]=r;return[o,i,s,a,u,l,f]}function mp(e,t){const n=e.formatToParts(t),r=[];for(let i=0;i<n.length;i++){const{type:s,value:o}=n[i],a=dp[s];s==="era"?r[a]=o:V(a)||(r[a]=parseInt(o,10))}return r}let ui={};class Tt extends Kr{static create(t){return ui[t]||(ui[t]=new Tt(t)),ui[t]}static resetCache(){ui={},Ti={}}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=Tt.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return Gf(t,n,r,this.name)}formatOffset(t,n){return vr(this.offset(t),n)}offset(t){const n=new Date(t);if(isNaN(n))return NaN;const r=fp(this.name);let[i,s,o,a,u,l,f]=r.formatToParts?mp(r,n):hp(r,n);a==="BC"&&(i=-Math.abs(i)+1);const d=ls({year:i,month:s,day:o,hour:u===24?0:u,minute:l,second:f,millisecond:0});let p=+n;const y=p%1e3;return p-=y>=0?y:1e3+y,(d-p)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let Eu={};function pp(e,t={}){const n=JSON.stringify([e,t]);let r=Eu[n];return r||(r=new Intl.ListFormat(e,t),Eu[n]=r),r}let Vo={};function Uo(e,t={}){const n=JSON.stringify([e,t]);let r=Vo[n];return r||(r=new Intl.DateTimeFormat(e,t),Vo[n]=r),r}let Wo={};function gp(e,t={}){const n=JSON.stringify([e,t]);let r=Wo[n];return r||(r=new Intl.NumberFormat(e,t),Wo[n]=r),r}let qo={};function wp(e,t={}){const{base:n,...r}=t,i=JSON.stringify([e,r]);let s=qo[i];return s||(s=new Intl.RelativeTimeFormat(e,t),qo[i]=s),s}let pr=null;function yp(){return pr||(pr=new Intl.DateTimeFormat().resolvedOptions().locale,pr)}let Du={};function bp(e){let t=Du[e];if(!t){const n=new Intl.Locale(e);t="getWeekInfo"in n?n.getWeekInfo():n.weekInfo,Du[e]=t}return t}function Ep(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const n=e.indexOf("-u-");if(n===-1)return[e];{let r,i;try{r=Uo(e).resolvedOptions(),i=e}catch{const u=e.substring(0,n);r=Uo(u).resolvedOptions(),i=u}const{numberingSystem:s,calendar:o}=r;return[i,s,o]}}function Dp(e,t,n){return(n||t)&&(e.includes("-u-")||(e+="-u"),n&&(e+=`-ca-${n}`),t&&(e+=`-nu-${t}`)),e}function vp(e){const t=[];for(let n=1;n<=12;n++){const r=U.utc(2009,n,1);t.push(e(r))}return t}function Ap(e){const t=[];for(let n=1;n<=7;n++){const r=U.utc(2016,11,13+n);t.push(e(r))}return t}function li(e,t,n,r){const i=e.listingMode();return i==="error"?null:i==="en"?n(t):r(t)}function $p(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem==="latn"}class Cp{constructor(t,n,r){this.padTo=r.padTo||0,this.floor=r.floor||!1;const{padTo:i,floor:s,...o}=r;if(!n||Object.keys(o).length>0){const a={useGrouping:!1,...r};r.padTo>0&&(a.minimumIntegerDigits=r.padTo),this.inf=gp(t,a)}}format(t){if(this.inf){const n=this.floor?Math.floor(t):t;return this.inf.format(n)}else{const n=this.floor?Math.floor(t):Ca(t,3);return le(n,this.padTo)}}}class kp{constructor(t,n,r){this.opts=r,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const o=-1*(t.offset/60),a=o>=0?`Etc/GMT+${o}`:`Etc/GMT${o}`;t.offset!==0&&Tt.create(a).valid?(i=a,this.dt=t):(i="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,i=t.zone.name):(i="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const s={...this.opts};s.timeZone=s.timeZone||i,this.dtf=Uo(n,s)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(n=>{if(n.type==="timeZoneName"){const r=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...n,value:r}}else return n}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class Sp{constructor(t,n,r){this.opts={style:"long",...r},!n&&jf()&&(this.rtf=wp(t,r))}format(t,n){return this.rtf?this.rtf.format(t,n):Jp(n,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,n){return this.rtf?this.rtf.formatToParts(t,n):[]}}const Fp={firstDay:1,minimalDays:4,weekend:[6,7]};class H{static fromOpts(t){return H.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,n,r,i,s=!1){const o=t||te.defaultLocale,a=o||(s?"en-US":yp()),u=n||te.defaultNumberingSystem,l=r||te.defaultOutputCalendar,f=jo(i)||te.defaultWeekSettings;return new H(a,u,l,f,o)}static resetCache(){pr=null,Vo={},Wo={},qo={}}static fromObject({locale:t,numberingSystem:n,outputCalendar:r,weekSettings:i}={}){return H.create(t,n,r,i)}constructor(t,n,r,i,s){const[o,a,u]=Ep(t);this.locale=o,this.numberingSystem=n||a||null,this.outputCalendar=r||u||null,this.weekSettings=i,this.intl=Dp(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=s,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=$p(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),n=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&n?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:H.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,jo(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,n=!1){return li(this,t,Yf,()=>{const r=n?{month:t,day:"numeric"}:{month:t},i=n?"format":"standalone";return this.monthsCache[i][t]||(this.monthsCache[i][t]=vp(s=>this.extract(s,r,"month"))),this.monthsCache[i][t]})}weekdays(t,n=!1){return li(this,t,Qf,()=>{const r=n?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},i=n?"format":"standalone";return this.weekdaysCache[i][t]||(this.weekdaysCache[i][t]=Ap(s=>this.extract(s,r,"weekday"))),this.weekdaysCache[i][t]})}meridiems(){return li(this,void 0,()=>Xf,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[U.utc(2016,11,13,9),U.utc(2016,11,13,19)].map(n=>this.extract(n,t,"dayperiod"))}return this.meridiemCache})}eras(t){return li(this,t,ed,()=>{const n={era:t};return this.eraCache[t]||(this.eraCache[t]=[U.utc(-40,1,1),U.utc(2017,1,1)].map(r=>this.extract(r,n,"era"))),this.eraCache[t]})}extract(t,n,r){const i=this.dtFormatter(t,n),s=i.formatToParts(),o=s.find(a=>a.type.toLowerCase()===r);return o?o.value:null}numberFormatter(t={}){return new Cp(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,n={}){return new kp(t,this.intl,n)}relFormatter(t={}){return new Sp(this.intl,this.isEnglish(),t)}listFormatter(t={}){return pp(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:zf()?bp(this.locale):Fp}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let Qs=null;class Ae extends Kr{static get utcInstance(){return Qs===null&&(Qs=new Ae(0)),Qs}static instance(t){return t===0?Ae.utcInstance:new Ae(t)}static parseSpecifier(t){if(t){const n=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(n)return new Ae(cs(n[1],n[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${vr(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${vr(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,n){return vr(this.fixed,n)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class Tp extends Kr{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function qt(e,t){if(V(e)||e===null)return t;if(e instanceof Kr)return e;if(Lp(e)){const n=e.toLowerCase();return n==="default"?t:n==="local"||n==="system"?as.instance:n==="utc"||n==="gmt"?Ae.utcInstance:Ae.parseSpecifier(n)||Tt.create(e)}else return Kt(e)?Ae.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new Tp(e)}const Da={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},vu={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},Mp=Da.hanidec.replace(/[\[|\]]/g,"").split("");function Np(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);if(e[n].search(Da.hanidec)!==-1)t+=Mp.indexOf(e[n]);else for(const i in vu){const[s,o]=vu[i];r>=s&&r<=o&&(t+=r-s)}}return parseInt(t,10)}else return t}let Nn={};function xp(){Nn={}}function nt({numberingSystem:e},t=""){const n=e||"latn";return Nn[n]||(Nn[n]={}),Nn[n][t]||(Nn[n][t]=new RegExp(`${Da[n]}${t}`)),Nn[n][t]}let Au=()=>Date.now(),$u="system",Cu=null,ku=null,Su=null,Fu=60,Tu,Mu=null;class te{static get now(){return Au}static set now(t){Au=t}static set defaultZone(t){$u=t}static get defaultZone(){return qt($u,as.instance)}static get defaultLocale(){return Cu}static set defaultLocale(t){Cu=t}static get defaultNumberingSystem(){return ku}static set defaultNumberingSystem(t){ku=t}static get defaultOutputCalendar(){return Su}static set defaultOutputCalendar(t){Su=t}static get defaultWeekSettings(){return Mu}static set defaultWeekSettings(t){Mu=jo(t)}static get twoDigitCutoffYear(){return Fu}static set twoDigitCutoffYear(t){Fu=t%100}static get throwOnInvalid(){return Tu}static set throwOnInvalid(t){Tu=t}static resetCaches(){H.resetCache(),Tt.resetCache(),U.resetCache(),xp()}}class st{constructor(t,n){this.reason=t,this.explanation=n}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Of=[0,31,59,90,120,151,181,212,243,273,304,334],_f=[0,31,60,91,121,152,182,213,244,274,305,335];function Xe(e,t){return new st("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function va(e,t,n){const r=new Date(Date.UTC(e,t-1,n));e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);const i=r.getUTCDay();return i===0?7:i}function Vf(e,t,n){return n+(Zr(e)?_f:Of)[t-1]}function Uf(e,t){const n=Zr(e)?_f:Of,r=n.findIndex(s=>s<t),i=t-n[r];return{month:r+1,day:i}}function Aa(e,t){return(e-t+7)%7+1}function Vi(e,t=4,n=1){const{year:r,month:i,day:s}=e,o=Vf(r,i,s),a=Aa(va(r,i,s),n);let u=Math.floor((o-a+14-t)/7),l;return u<1?(l=r-1,u=Sr(l,t,n)):u>Sr(r,t,n)?(l=r+1,u=1):l=r,{weekYear:l,weekNumber:u,weekday:a,...fs(e)}}function Nu(e,t=4,n=1){const{weekYear:r,weekNumber:i,weekday:s}=e,o=Aa(va(r,1,t),n),a=_n(r);let u=i*7+s-o-7+t,l;u<1?(l=r-1,u+=_n(l)):u>a?(l=r+1,u-=_n(r)):l=r;const{month:f,day:c}=Uf(l,u);return{year:l,month:f,day:c,...fs(e)}}function Xs(e){const{year:t,month:n,day:r}=e,i=Vf(t,n,r);return{year:t,ordinal:i,...fs(e)}}function xu(e){const{year:t,ordinal:n}=e,{month:r,day:i}=Uf(t,n);return{year:t,month:r,day:i,...fs(e)}}function Bu(e,t){if(!V(e.localWeekday)||!V(e.localWeekNumber)||!V(e.localWeekYear)){if(!V(e.weekday)||!V(e.weekNumber)||!V(e.weekYear))throw new In("Cannot mix locale-based week fields with ISO-based week fields");return V(e.localWeekday)||(e.weekday=e.localWeekday),V(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),V(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function Bp(e,t=4,n=1){const r=us(e.weekYear),i=et(e.weekNumber,1,Sr(e.weekYear,t,n)),s=et(e.weekday,1,7);return r?i?s?!1:Xe("weekday",e.weekday):Xe("week",e.weekNumber):Xe("weekYear",e.weekYear)}function Pp(e){const t=us(e.year),n=et(e.ordinal,1,_n(e.year));return t?n?!1:Xe("ordinal",e.ordinal):Xe("year",e.year)}function Wf(e){const t=us(e.year),n=et(e.month,1,12),r=et(e.day,1,Ui(e.year,e.month));return t?n?r?!1:Xe("day",e.day):Xe("month",e.month):Xe("year",e.year)}function qf(e){const{hour:t,minute:n,second:r,millisecond:i}=e,s=et(t,0,23)||t===24&&n===0&&r===0&&i===0,o=et(n,0,59),a=et(r,0,59),u=et(i,0,999);return s?o?a?u?!1:Xe("millisecond",i):Xe("second",r):Xe("minute",n):Xe("hour",t)}function V(e){return typeof e>"u"}function Kt(e){return typeof e=="number"}function us(e){return typeof e=="number"&&e%1===0}function Lp(e){return typeof e=="string"}function Ip(e){return Object.prototype.toString.call(e)==="[object Date]"}function jf(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function zf(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function Rp(e){return Array.isArray(e)?e:[e]}function Pu(e,t,n){if(e.length!==0)return e.reduce((r,i)=>{const s=[t(i),i];return r&&n(r[0],s[0])===r[0]?r:s},null)[1]}function Op(e,t){return t.reduce((n,r)=>(n[r]=e[r],n),{})}function jn(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function jo(e){if(e==null)return null;if(typeof e!="object")throw new ye("Week settings must be an object");if(!et(e.firstDay,1,7)||!et(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!et(t,1,7)))throw new ye("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function et(e,t,n){return us(e)&&e>=t&&e<=n}function _p(e,t){return e-t*Math.floor(e/t)}function le(e,t=2){const n=e<0;let r;return n?r="-"+(""+-e).padStart(t,"0"):r=(""+e).padStart(t,"0"),r}function Ut(e){if(!(V(e)||e===null||e===""))return parseInt(e,10)}function on(e){if(!(V(e)||e===null||e===""))return parseFloat(e)}function $a(e){if(!(V(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function Ca(e,t,n=!1){const r=10**t;return(n?Math.trunc:Math.round)(e*r)/r}function Zr(e){return e%4===0&&(e%100!==0||e%400===0)}function _n(e){return Zr(e)?366:365}function Ui(e,t){const n=_p(t-1,12)+1,r=e+(t-n)/12;return n===2?Zr(r)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function ls(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function Lu(e,t,n){return-Aa(va(e,1,t),n)+t-1}function Sr(e,t=4,n=1){const r=Lu(e,t,n),i=Lu(e+1,t,n);return(_n(e)-r+i)/7}function zo(e){return e>99?e:e>te.twoDigitCutoffYear?1900+e:2e3+e}function Gf(e,t,n,r=null){const i=new Date(e),s={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};r&&(s.timeZone=r);const o={timeZoneName:t,...s},a=new Intl.DateTimeFormat(n,o).formatToParts(i).find(u=>u.type.toLowerCase()==="timezonename");return a?a.value:null}function cs(e,t){let n=parseInt(e,10);Number.isNaN(n)&&(n=0);const r=parseInt(t,10)||0,i=n<0||Object.is(n,-0)?-r:r;return n*60+i}function Kf(e){const t=Number(e);if(typeof e=="boolean"||e===""||Number.isNaN(t))throw new ye(`Invalid unit value ${e}`);return t}function Wi(e,t){const n={};for(const r in e)if(jn(e,r)){const i=e[r];if(i==null)continue;n[t(r)]=Kf(i)}return n}function vr(e,t){const n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${le(n,2)}:${le(r,2)}`;case"narrow":return`${i}${n}${r>0?`:${r}`:""}`;case"techie":return`${i}${le(n,2)}${le(r,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function fs(e){return Op(e,["hour","minute","second","millisecond"])}const Vp=["January","February","March","April","May","June","July","August","September","October","November","December"],Zf=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Up=["J","F","M","A","M","J","J","A","S","O","N","D"];function Yf(e){switch(e){case"narrow":return[...Up];case"short":return[...Zf];case"long":return[...Vp];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const Jf=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Hf=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Wp=["M","T","W","T","F","S","S"];function Qf(e){switch(e){case"narrow":return[...Wp];case"short":return[...Hf];case"long":return[...Jf];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const Xf=["AM","PM"],qp=["Before Christ","Anno Domini"],jp=["BC","AD"],zp=["B","A"];function ed(e){switch(e){case"narrow":return[...zp];case"short":return[...jp];case"long":return[...qp];default:return null}}function Gp(e){return Xf[e.hour<12?0:1]}function Kp(e,t){return Qf(t)[e.weekday-1]}function Zp(e,t){return Yf(t)[e.month-1]}function Yp(e,t){return ed(t)[e.year<0?0:1]}function Jp(e,t,n="always",r=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},s=["hours","minutes","seconds"].indexOf(e)===-1;if(n==="auto"&&s){const c=e==="days";switch(t){case 1:return c?"tomorrow":`next ${i[e][0]}`;case-1:return c?"yesterday":`last ${i[e][0]}`;case 0:return c?"today":`this ${i[e][0]}`}}const o=Object.is(t,-0)||t<0,a=Math.abs(t),u=a===1,l=i[e],f=r?u?l[1]:l[2]||l[1]:u?i[e][0]:e;return o?`${a} ${f} ago`:`in ${a} ${f}`}function Iu(e,t){let n="";for(const r of e)r.literal?n+=r.val:n+=t(r.val);return n}const Hp={D:_i,DD:bf,DDD:Ef,DDDD:Df,t:vf,tt:Af,ttt:$f,tttt:Cf,T:kf,TT:Sf,TTT:Ff,TTTT:Tf,f:Mf,ff:xf,fff:Pf,ffff:If,F:Nf,FF:Bf,FFF:Lf,FFFF:Rf};class Ee{static create(t,n={}){return new Ee(t,n)}static parseFormat(t){let n=null,r="",i=!1;const s=[];for(let o=0;o<t.length;o++){const a=t.charAt(o);a==="'"?(r.length>0&&s.push({literal:i||/^\s+$/.test(r),val:r}),n=null,r="",i=!i):i||a===n?r+=a:(r.length>0&&s.push({literal:/^\s+$/.test(r),val:r}),r=a,n=a)}return r.length>0&&s.push({literal:i||/^\s+$/.test(r),val:r}),s}static macroTokenToFormatOpts(t){return Hp[t]}constructor(t,n){this.opts=n,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,n){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...n}).format()}dtFormatter(t,n={}){return this.loc.dtFormatter(t,{...this.opts,...n})}formatDateTime(t,n){return this.dtFormatter(t,n).format()}formatDateTimeParts(t,n){return this.dtFormatter(t,n).formatToParts()}formatInterval(t,n){return this.dtFormatter(t.start,n).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,n){return this.dtFormatter(t,n).resolvedOptions()}num(t,n=0){if(this.opts.forceSimple)return le(t,n);const r={...this.opts};return n>0&&(r.padTo=n),this.loc.numberFormatter(r).format(t)}formatDateTimeFromString(t,n){const r=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",s=(p,y)=>this.loc.extract(t,p,y),o=p=>t.isOffsetFixed&&t.offset===0&&p.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,p.format):"",a=()=>r?Gp(t):s({hour:"numeric",hourCycle:"h12"},"dayperiod"),u=(p,y)=>r?Zp(t,p):s(y?{month:p}:{month:p,day:"numeric"},"month"),l=(p,y)=>r?Kp(t,p):s(y?{weekday:p}:{weekday:p,month:"long",day:"numeric"},"weekday"),f=p=>{const y=Ee.macroTokenToFormatOpts(p);return y?this.formatWithSystemDefault(t,y):p},c=p=>r?Yp(t,p):s({era:p},"era"),d=p=>{switch(p){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return o({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return o({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return o({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return i?s({day:"numeric"},"day"):this.num(t.day);case"dd":return i?s({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return i?s({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return i?s({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return i?s({month:"numeric"},"month"):this.num(t.month);case"MM":return i?s({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return i?s({year:"numeric"},"year"):this.num(t.year);case"yy":return i?s({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return i?s({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return i?s({year:"numeric"},"year"):this.num(t.year,6);case"G":return c("short");case"GG":return c("long");case"GGGGG":return c("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return f(p)}};return Iu(Ee.parseFormat(n),d)}formatDurationFromString(t,n){const r=u=>{switch(u[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},i=u=>l=>{const f=r(l);return f?this.num(u.get(f),l.length):l},s=Ee.parseFormat(n),o=s.reduce((u,{literal:l,val:f})=>l?u:u.concat(f),[]),a=t.shiftTo(...o.map(r).filter(u=>u));return Iu(s,i(a))}}const td=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function er(...e){const t=e.reduce((n,r)=>n+r.source,"");return RegExp(`^${t}$`)}function tr(...e){return t=>e.reduce(([n,r,i],s)=>{const[o,a,u]=s(t,i);return[{...n,...o},a||r,u]},[{},null,1]).slice(0,2)}function nr(e,...t){if(e==null)return[null,null];for(const[n,r]of t){const i=n.exec(e);if(i)return r(i)}return[null,null]}function nd(...e){return(t,n)=>{const r={};let i;for(i=0;i<e.length;i++)r[e[i]]=Ut(t[n+i]);return[r,null,n+i]}}const rd=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,Qp=`(?:${rd.source}?(?:\\[(${td.source})\\])?)?`,ka=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,id=RegExp(`${ka.source}${Qp}`),Sa=RegExp(`(?:T${id.source})?`),Xp=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,eg=/(\d{4})-?W(\d\d)(?:-?(\d))?/,tg=/(\d{4})-?(\d{3})/,ng=nd("weekYear","weekNumber","weekDay"),rg=nd("year","ordinal"),ig=/(\d{4})-(\d\d)-(\d\d)/,sd=RegExp(`${ka.source} ?(?:${rd.source}|(${td.source}))?`),sg=RegExp(`(?: ${sd.source})?`);function Vn(e,t,n){const r=e[t];return V(r)?n:Ut(r)}function og(e,t){return[{year:Vn(e,t),month:Vn(e,t+1,1),day:Vn(e,t+2,1)},null,t+3]}function rr(e,t){return[{hours:Vn(e,t,0),minutes:Vn(e,t+1,0),seconds:Vn(e,t+2,0),milliseconds:$a(e[t+3])},null,t+4]}function Yr(e,t){const n=!e[t]&&!e[t+1],r=cs(e[t+1],e[t+2]),i=n?null:Ae.instance(r);return[{},i,t+3]}function Jr(e,t){const n=e[t]?Tt.create(e[t]):null;return[{},n,t+1]}const ag=RegExp(`^T?${ka.source}$`),ug=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function lg(e){const[t,n,r,i,s,o,a,u,l]=e,f=t[0]==="-",c=u&&u[0]==="-",d=(p,y=!1)=>p!==void 0&&(y||p&&f)?-p:p;return[{years:d(on(n)),months:d(on(r)),weeks:d(on(i)),days:d(on(s)),hours:d(on(o)),minutes:d(on(a)),seconds:d(on(u),u==="-0"),milliseconds:d($a(l),c)}]}const cg={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Fa(e,t,n,r,i,s,o){const a={year:t.length===2?zo(Ut(t)):Ut(t),month:Zf.indexOf(n)+1,day:Ut(r),hour:Ut(i),minute:Ut(s)};return o&&(a.second=Ut(o)),e&&(a.weekday=e.length>3?Jf.indexOf(e)+1:Hf.indexOf(e)+1),a}const fg=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function dg(e){const[,t,n,r,i,s,o,a,u,l,f,c]=e,d=Fa(t,i,r,n,s,o,a);let p;return u?p=cg[u]:l?p=0:p=cs(f,c),[d,new Ae(p)]}function hg(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const mg=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,pg=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,gg=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Ru(e){const[,t,n,r,i,s,o,a]=e;return[Fa(t,i,r,n,s,o,a),Ae.utcInstance]}function wg(e){const[,t,n,r,i,s,o,a]=e;return[Fa(t,a,n,r,i,s,o),Ae.utcInstance]}const yg=er(Xp,Sa),bg=er(eg,Sa),Eg=er(tg,Sa),Dg=er(id),od=tr(og,rr,Yr,Jr),vg=tr(ng,rr,Yr,Jr),Ag=tr(rg,rr,Yr,Jr),$g=tr(rr,Yr,Jr);function Cg(e){return nr(e,[yg,od],[bg,vg],[Eg,Ag],[Dg,$g])}function kg(e){return nr(hg(e),[fg,dg])}function Sg(e){return nr(e,[mg,Ru],[pg,Ru],[gg,wg])}function Fg(e){return nr(e,[ug,lg])}const Tg=tr(rr);function Mg(e){return nr(e,[ag,Tg])}const Ng=er(ig,sg),xg=er(sd),Bg=tr(rr,Yr,Jr);function Pg(e){return nr(e,[Ng,od],[xg,Bg])}const Ou="Invalid Duration",ad={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Lg={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...ad},Ke=146097/400,vn=146097/4800,Ig={years:{quarters:4,months:12,weeks:Ke/7,days:Ke,hours:Ke*24,minutes:Ke*24*60,seconds:Ke*24*60*60,milliseconds:Ke*24*60*60*1e3},quarters:{months:3,weeks:Ke/28,days:Ke/4,hours:Ke*24/4,minutes:Ke*24*60/4,seconds:Ke*24*60*60/4,milliseconds:Ke*24*60*60*1e3/4},months:{weeks:vn/7,days:vn,hours:vn*24,minutes:vn*24*60,seconds:vn*24*60*60,milliseconds:vn*24*60*60*1e3},...ad},hn=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],Rg=hn.slice(0).reverse();function Ot(e,t,n=!1){const r={values:n?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new z(r)}function ud(e,t){let n=t.milliseconds??0;for(const r of Rg.slice(1))t[r]&&(n+=t[r]*e[r].milliseconds);return n}function _u(e,t){const n=ud(e,t)<0?-1:1;hn.reduceRight((r,i)=>{if(V(t[i]))return r;if(r){const s=t[r]*n,o=e[i][r],a=Math.floor(s/o);t[i]+=a*n,t[r]-=a*o*n}return i},null),hn.reduce((r,i)=>{if(V(t[i]))return r;if(r){const s=t[r]%1;t[r]-=s,t[i]+=s*e[r][i]}return i},null)}function Og(e){const t={};for(const[n,r]of Object.entries(e))r!==0&&(t[n]=r);return t}class z{constructor(t){const n=t.conversionAccuracy==="longterm"||!1;let r=n?Ig:Lg;t.matrix&&(r=t.matrix),this.values=t.values,this.loc=t.loc||H.create(),this.conversionAccuracy=n?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=r,this.isLuxonDuration=!0}static fromMillis(t,n){return z.fromObject({milliseconds:t},n)}static fromObject(t,n={}){if(t==null||typeof t!="object")throw new ye(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new z({values:Wi(t,z.normalizeUnit),loc:H.fromObject(n),conversionAccuracy:n.conversionAccuracy,matrix:n.matrix})}static fromDurationLike(t){if(Kt(t))return z.fromMillis(t);if(z.isDuration(t))return t;if(typeof t=="object")return z.fromObject(t);throw new ye(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,n){const[r]=Fg(t);return r?z.fromObject(r,n):z.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,n){const[r]=Mg(t);return r?z.fromObject(r,n):z.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,n=null){if(!t)throw new ye("need to specify a reason the Duration is invalid");const r=t instanceof st?t:new st(t,n);if(te.throwOnInvalid)throw new up(r);return new z({invalid:r})}static normalizeUnit(t){const n={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!n)throw new yf(t);return n}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,n={}){const r={...n,floor:n.round!==!1&&n.floor!==!1};return this.isValid?Ee.create(this.loc,r).formatDurationFromString(this,t):Ou}toHuman(t={}){if(!this.isValid)return Ou;const n=hn.map(r=>{const i=this.values[r];return V(i)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:r.slice(0,-1)}).format(i)}).filter(r=>r);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=Ca(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const n=this.toMillis();return n<0||n>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},U.fromMillis(n,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?ud(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const n=z.fromDurationLike(t),r={};for(const i of hn)(jn(n.values,i)||jn(this.values,i))&&(r[i]=n.get(i)+this.get(i));return Ot(this,{values:r},!0)}minus(t){if(!this.isValid)return this;const n=z.fromDurationLike(t);return this.plus(n.negate())}mapUnits(t){if(!this.isValid)return this;const n={};for(const r of Object.keys(this.values))n[r]=Kf(t(this.values[r],r));return Ot(this,{values:n},!0)}get(t){return this[z.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const n={...this.values,...Wi(t,z.normalizeUnit)};return Ot(this,{values:n})}reconfigure({locale:t,numberingSystem:n,conversionAccuracy:r,matrix:i}={}){const o={loc:this.loc.clone({locale:t,numberingSystem:n}),matrix:i,conversionAccuracy:r};return Ot(this,o)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return _u(this.matrix,t),Ot(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=Og(this.normalize().shiftToAll().toObject());return Ot(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(o=>z.normalizeUnit(o));const n={},r={},i=this.toObject();let s;for(const o of hn)if(t.indexOf(o)>=0){s=o;let a=0;for(const l in r)a+=this.matrix[l][o]*r[l],r[l]=0;Kt(i[o])&&(a+=i[o]);const u=Math.trunc(a);n[o]=u,r[o]=(a*1e3-u*1e3)/1e3}else Kt(i[o])&&(r[o]=i[o]);for(const o in r)r[o]!==0&&(n[s]+=o===s?r[o]:r[o]/this.matrix[s][o]);return _u(this.matrix,n),Ot(this,{values:n},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const n of Object.keys(this.values))t[n]=this.values[n]===0?0:-this.values[n];return Ot(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function n(r,i){return r===void 0||r===0?i===void 0||i===0:r===i}for(const r of hn)if(!n(this.values[r],t.values[r]))return!1;return!0}}const An="Invalid Interval";function _g(e,t){return!e||!e.isValid?oe.invalid("missing or invalid start"):!t||!t.isValid?oe.invalid("missing or invalid end"):t<e?oe.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class oe{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,n=null){if(!t)throw new ye("need to specify a reason the Interval is invalid");const r=t instanceof st?t:new st(t,n);if(te.throwOnInvalid)throw new ap(r);return new oe({invalid:r})}static fromDateTimes(t,n){const r=ur(t),i=ur(n),s=_g(r,i);return s??new oe({start:r,end:i})}static after(t,n){const r=z.fromDurationLike(n),i=ur(t);return oe.fromDateTimes(i,i.plus(r))}static before(t,n){const r=z.fromDurationLike(n),i=ur(t);return oe.fromDateTimes(i.minus(r),i)}static fromISO(t,n){const[r,i]=(t||"").split("/",2);if(r&&i){let s,o;try{s=U.fromISO(r,n),o=s.isValid}catch{o=!1}let a,u;try{a=U.fromISO(i,n),u=a.isValid}catch{u=!1}if(o&&u)return oe.fromDateTimes(s,a);if(o){const l=z.fromISO(i,n);if(l.isValid)return oe.after(s,l)}else if(u){const l=z.fromISO(r,n);if(l.isValid)return oe.before(a,l)}}return oe.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",n){if(!this.isValid)return NaN;const r=this.start.startOf(t,n);let i;return n?.useLocaleWeeks?i=this.end.reconfigure({locale:r.locale}):i=this.end,i=i.startOf(t,n),Math.floor(i.diff(r,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:n}={}){return this.isValid?oe.fromDateTimes(t||this.s,n||this.e):this}splitAt(...t){if(!this.isValid)return[];const n=t.map(ur).filter(o=>this.contains(o)).sort((o,a)=>o.toMillis()-a.toMillis()),r=[];let{s:i}=this,s=0;for(;i<this.e;){const o=n[s]||this.e,a=+o>+this.e?this.e:o;r.push(oe.fromDateTimes(i,a)),i=a,s+=1}return r}splitBy(t){const n=z.fromDurationLike(t);if(!this.isValid||!n.isValid||n.as("milliseconds")===0)return[];let{s:r}=this,i=1,s;const o=[];for(;r<this.e;){const a=this.start.plus(n.mapUnits(u=>u*i));s=+a>+this.e?this.e:a,o.push(oe.fromDateTimes(r,s)),r=s,i+=1}return o}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const n=this.s>t.s?this.s:t.s,r=this.e<t.e?this.e:t.e;return n>=r?null:oe.fromDateTimes(n,r)}union(t){if(!this.isValid)return this;const n=this.s<t.s?this.s:t.s,r=this.e>t.e?this.e:t.e;return oe.fromDateTimes(n,r)}static merge(t){const[n,r]=t.sort((i,s)=>i.s-s.s).reduce(([i,s],o)=>s?s.overlaps(o)||s.abutsStart(o)?[i,s.union(o)]:[i.concat([s]),o]:[i,o],[[],null]);return r&&n.push(r),n}static xor(t){let n=null,r=0;const i=[],s=t.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),o=Array.prototype.concat(...s),a=o.sort((u,l)=>u.time-l.time);for(const u of a)r+=u.type==="s"?1:-1,r===1?n=u.time:(n&&+n!=+u.time&&i.push(oe.fromDateTimes(n,u.time)),n=null);return oe.merge(i)}difference(...t){return oe.xor([this].concat(t)).map(n=>this.intersection(n)).filter(n=>n&&!n.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:An}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=_i,n={}){return this.isValid?Ee.create(this.s.loc.clone(n),t).formatInterval(this):An}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:An}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:An}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:An}toFormat(t,{separator:n=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${n}${this.e.toFormat(t)}`:An}toDuration(t,n){return this.isValid?this.e.diff(this.s,t,n):z.invalid(this.invalidReason)}mapEndpoints(t){return oe.fromDateTimes(t(this.s),t(this.e))}}class ci{static hasDST(t=te.defaultZone){const n=U.now().setZone(t).set({month:12});return!t.isUniversal&&n.offset!==n.set({month:6}).offset}static isValidIANAZone(t){return Tt.isValidZone(t)}static normalizeZone(t){return qt(t,te.defaultZone)}static getStartOfWeek({locale:t=null,locObj:n=null}={}){return(n||H.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:n=null}={}){return(n||H.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:n=null}={}){return(n||H.create(t)).getWeekendDays().slice()}static months(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||H.create(n,r,s)).months(t)}static monthsFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||H.create(n,r,s)).months(t,!0)}static weekdays(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||H.create(n,r,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||H.create(n,r,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return H.create(t).meridiems()}static eras(t="short",{locale:n=null}={}){return H.create(n,null,"gregory").eras(t)}static features(){return{relative:jf(),localeWeek:zf()}}}function Vu(e,t){const n=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),r=n(t)-n(e);return Math.floor(z.fromMillis(r).as("days"))}function Vg(e,t,n){const r=[["years",(u,l)=>l.year-u.year],["quarters",(u,l)=>l.quarter-u.quarter+(l.year-u.year)*4],["months",(u,l)=>l.month-u.month+(l.year-u.year)*12],["weeks",(u,l)=>{const f=Vu(u,l);return(f-f%7)/7}],["days",Vu]],i={},s=e;let o,a;for(const[u,l]of r)n.indexOf(u)>=0&&(o=u,i[u]=l(e,t),a=s.plus(i),a>t?(i[u]--,e=s.plus(i),e>t&&(a=e,i[u]--,e=s.plus(i))):e=a);return[e,i,a,o]}function Ug(e,t,n,r){let[i,s,o,a]=Vg(e,t,n);const u=t-i,l=n.filter(c=>["hours","minutes","seconds","milliseconds"].indexOf(c)>=0);l.length===0&&(o<t&&(o=i.plus({[a]:1})),o!==i&&(s[a]=(s[a]||0)+u/(o-i)));const f=z.fromObject(s,r);return l.length>0?z.fromMillis(u,r).shiftTo(...l).plus(f):f}const Wg="missing Intl.DateTimeFormat.formatToParts support";function K(e,t=n=>n){return{regex:e,deser:([n])=>t(Np(n))}}const qg=" ",ld=`[ ${qg}]`,cd=new RegExp(ld,"g");function jg(e){return e.replace(/\./g,"\\.?").replace(cd,ld)}function Uu(e){return e.replace(/\./g,"").replace(cd," ").toLowerCase()}function rt(e,t){return e===null?null:{regex:RegExp(e.map(jg).join("|")),deser:([n])=>e.findIndex(r=>Uu(n)===Uu(r))+t}}function Wu(e,t){return{regex:e,deser:([,n,r])=>cs(n,r),groups:t}}function fi(e){return{regex:e,deser:([t])=>t}}function zg(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function Gg(e,t){const n=nt(t),r=nt(t,"{2}"),i=nt(t,"{3}"),s=nt(t,"{4}"),o=nt(t,"{6}"),a=nt(t,"{1,2}"),u=nt(t,"{1,3}"),l=nt(t,"{1,6}"),f=nt(t,"{1,9}"),c=nt(t,"{2,4}"),d=nt(t,"{4,6}"),p=$=>({regex:RegExp(zg($.val)),deser:([A])=>A,literal:!0}),D=($=>{if(e.literal)return p($);switch($.val){case"G":return rt(t.eras("short"),0);case"GG":return rt(t.eras("long"),0);case"y":return K(l);case"yy":return K(c,zo);case"yyyy":return K(s);case"yyyyy":return K(d);case"yyyyyy":return K(o);case"M":return K(a);case"MM":return K(r);case"MMM":return rt(t.months("short",!0),1);case"MMMM":return rt(t.months("long",!0),1);case"L":return K(a);case"LL":return K(r);case"LLL":return rt(t.months("short",!1),1);case"LLLL":return rt(t.months("long",!1),1);case"d":return K(a);case"dd":return K(r);case"o":return K(u);case"ooo":return K(i);case"HH":return K(r);case"H":return K(a);case"hh":return K(r);case"h":return K(a);case"mm":return K(r);case"m":return K(a);case"q":return K(a);case"qq":return K(r);case"s":return K(a);case"ss":return K(r);case"S":return K(u);case"SSS":return K(i);case"u":return fi(f);case"uu":return fi(a);case"uuu":return K(n);case"a":return rt(t.meridiems(),0);case"kkkk":return K(s);case"kk":return K(c,zo);case"W":return K(a);case"WW":return K(r);case"E":case"c":return K(n);case"EEE":return rt(t.weekdays("short",!1),1);case"EEEE":return rt(t.weekdays("long",!1),1);case"ccc":return rt(t.weekdays("short",!0),1);case"cccc":return rt(t.weekdays("long",!0),1);case"Z":case"ZZ":return Wu(new RegExp(`([+-]${a.source})(?::(${r.source}))?`),2);case"ZZZ":return Wu(new RegExp(`([+-]${a.source})(${r.source})?`),2);case"z":return fi(/[a-z_+-/]{1,256}?/i);case" ":return fi(/[^\S\n\r]/);default:return p($)}})(e)||{invalidReason:Wg};return D.token=e,D}const Kg={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function Zg(e,t,n){const{type:r,value:i}=e;if(r==="literal"){const u=/^\s+$/.test(i);return{literal:!u,val:u?" ":i}}const s=t[r];let o=r;r==="hour"&&(t.hour12!=null?o=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?o="hour12":o="hour24":o=n.hour12?"hour12":"hour24");let a=Kg[o];if(typeof a=="object"&&(a=a[s]),a)return{literal:!1,val:a}}function Yg(e){return[`^${e.map(n=>n.regex).reduce((n,r)=>`${n}(${r.source})`,"")}$`,e]}function Jg(e,t,n){const r=e.match(t);if(r){const i={};let s=1;for(const o in n)if(jn(n,o)){const a=n[o],u=a.groups?a.groups+1:1;!a.literal&&a.token&&(i[a.token.val[0]]=a.deser(r.slice(s,s+u))),s+=u}return[r,i]}else return[r,{}]}function Hg(e){const t=s=>{switch(s){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let n=null,r;return V(e.z)||(n=Tt.create(e.z)),V(e.Z)||(n||(n=new Ae(e.Z)),r=e.Z),V(e.q)||(e.M=(e.q-1)*3+1),V(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),V(e.u)||(e.S=$a(e.u)),[Object.keys(e).reduce((s,o)=>{const a=t(o);return a&&(s[a]=e[o]),s},{}),n,r]}let eo=null;function Qg(){return eo||(eo=U.fromMillis(1555555555555)),eo}function Xg(e,t){if(e.literal)return e;const n=Ee.macroTokenToFormatOpts(e.val),r=md(n,t);return r==null||r.includes(void 0)?e:r}function fd(e,t){return Array.prototype.concat(...e.map(n=>Xg(n,t)))}class dd{constructor(t,n){if(this.locale=t,this.format=n,this.tokens=fd(Ee.parseFormat(n),t),this.units=this.tokens.map(r=>Gg(r,t)),this.disqualifyingUnit=this.units.find(r=>r.invalidReason),!this.disqualifyingUnit){const[r,i]=Yg(this.units);this.regex=RegExp(r,"i"),this.handlers=i}}explainFromTokens(t){if(this.isValid){const[n,r]=Jg(t,this.regex,this.handlers),[i,s,o]=r?Hg(r):[null,null,void 0];if(jn(r,"a")&&jn(r,"H"))throw new In("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:n,matches:r,result:i,zone:s,specificOffset:o}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function hd(e,t,n){return new dd(e,n).explainFromTokens(t)}function ew(e,t,n){const{result:r,zone:i,specificOffset:s,invalidReason:o}=hd(e,t,n);return[r,i,s,o]}function md(e,t){if(!e)return null;const r=Ee.create(t,e).dtFormatter(Qg()),i=r.formatToParts(),s=r.resolvedOptions();return i.map(o=>Zg(o,e,s))}const to="Invalid DateTime",tw=864e13;function gr(e){return new st("unsupported zone",`the zone "${e.name}" is not supported`)}function no(e){return e.weekData===null&&(e.weekData=Vi(e.c)),e.weekData}function ro(e){return e.localWeekData===null&&(e.localWeekData=Vi(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function an(e,t){const n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new U({...n,...t,old:n})}function pd(e,t,n){let r=e-t*60*1e3;const i=n.offset(r);if(t===i)return[r,t];r-=(i-t)*60*1e3;const s=n.offset(r);return i===s?[r,i]:[e-Math.min(i,s)*60*1e3,Math.max(i,s)]}function di(e,t){e+=t*60*1e3;const n=new Date(e);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function Mi(e,t,n){return pd(ls(e),t,n)}function qu(e,t){const n=e.o,r=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,s={...e.c,year:r,month:i,day:Math.min(e.c.day,Ui(r,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},o=z.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=ls(s);let[u,l]=pd(a,n,e.zone);return o!==0&&(u+=o,l=e.zone.offset(u)),{ts:u,o:l}}function $n(e,t,n,r,i,s){const{setZone:o,zone:a}=n;if(e&&Object.keys(e).length!==0||t){const u=t||a,l=U.fromObject(e,{...n,zone:u,specificOffset:s});return o?l:l.setZone(a)}else return U.invalid(new st("unparsable",`the input "${i}" can't be parsed as ${r}`))}function hi(e,t,n=!0){return e.isValid?Ee.create(H.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function io(e,t){const n=e.c.year>9999||e.c.year<0;let r="";return n&&e.c.year>=0&&(r+="+"),r+=le(e.c.year,n?6:4),t?(r+="-",r+=le(e.c.month),r+="-",r+=le(e.c.day)):(r+=le(e.c.month),r+=le(e.c.day)),r}function ju(e,t,n,r,i,s){let o=le(e.c.hour);return t?(o+=":",o+=le(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!n)&&(o+=":")):o+=le(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!n)&&(o+=le(e.c.second),(e.c.millisecond!==0||!r)&&(o+=".",o+=le(e.c.millisecond,3))),i&&(e.isOffsetFixed&&e.offset===0&&!s?o+="Z":e.o<0?(o+="-",o+=le(Math.trunc(-e.o/60)),o+=":",o+=le(Math.trunc(-e.o%60))):(o+="+",o+=le(Math.trunc(e.o/60)),o+=":",o+=le(Math.trunc(e.o%60)))),s&&(o+="["+e.zone.ianaName+"]"),o}const gd={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},nw={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},rw={ordinal:1,hour:0,minute:0,second:0,millisecond:0},wd=["year","month","day","hour","minute","second","millisecond"],iw=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],sw=["year","ordinal","hour","minute","second","millisecond"];function ow(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new yf(e);return t}function zu(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return ow(e)}}function aw(e){return xi[e]||(Ni===void 0&&(Ni=te.now()),xi[e]=e.offset(Ni)),xi[e]}function Gu(e,t){const n=qt(t.zone,te.defaultZone);if(!n.isValid)return U.invalid(gr(n));const r=H.fromObject(t);let i,s;if(V(e.year))i=te.now();else{for(const u of wd)V(e[u])&&(e[u]=gd[u]);const o=Wf(e)||qf(e);if(o)return U.invalid(o);const a=aw(n);[i,s]=Mi(e,a,n)}return new U({ts:i,zone:n,loc:r,o:s})}function Ku(e,t,n){const r=V(n.round)?!0:n.round,i=(o,a)=>(o=Ca(o,r||n.calendary?0:2,!0),t.loc.clone(n).relFormatter(n).format(o,a)),s=o=>n.calendary?t.hasSame(e,o)?0:t.startOf(o).diff(e.startOf(o),o).get(o):t.diff(e,o).get(o);if(n.unit)return i(s(n.unit),n.unit);for(const o of n.units){const a=s(o);if(Math.abs(a)>=1)return i(a,o)}return i(e>t?-0:0,n.units[n.units.length-1])}function Zu(e){let t={},n;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],n=Array.from(e).slice(0,e.length-1)):n=Array.from(e),[t,n]}let Ni,xi={};class U{constructor(t){const n=t.zone||te.defaultZone;let r=t.invalid||(Number.isNaN(t.ts)?new st("invalid input"):null)||(n.isValid?null:gr(n));this.ts=V(t.ts)?te.now():t.ts;let i=null,s=null;if(!r)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(n))[i,s]=[t.old.c,t.old.o];else{const a=Kt(t.o)&&!t.old?t.o:n.offset(this.ts);i=di(this.ts,a),r=Number.isNaN(i.year)?new st("invalid input"):null,i=r?null:i,s=r?null:a}this._zone=n,this.loc=t.loc||H.create(),this.invalid=r,this.weekData=null,this.localWeekData=null,this.c=i,this.o=s,this.isLuxonDateTime=!0}static now(){return new U({})}static local(){const[t,n]=Zu(arguments),[r,i,s,o,a,u,l]=n;return Gu({year:r,month:i,day:s,hour:o,minute:a,second:u,millisecond:l},t)}static utc(){const[t,n]=Zu(arguments),[r,i,s,o,a,u,l]=n;return t.zone=Ae.utcInstance,Gu({year:r,month:i,day:s,hour:o,minute:a,second:u,millisecond:l},t)}static fromJSDate(t,n={}){const r=Ip(t)?t.valueOf():NaN;if(Number.isNaN(r))return U.invalid("invalid input");const i=qt(n.zone,te.defaultZone);return i.isValid?new U({ts:r,zone:i,loc:H.fromObject(n)}):U.invalid(gr(i))}static fromMillis(t,n={}){if(Kt(t))return t<-864e13||t>tw?U.invalid("Timestamp out of range"):new U({ts:t,zone:qt(n.zone,te.defaultZone),loc:H.fromObject(n)});throw new ye(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,n={}){if(Kt(t))return new U({ts:t*1e3,zone:qt(n.zone,te.defaultZone),loc:H.fromObject(n)});throw new ye("fromSeconds requires a numerical input")}static fromObject(t,n={}){t=t||{};const r=qt(n.zone,te.defaultZone);if(!r.isValid)return U.invalid(gr(r));const i=H.fromObject(n),s=Wi(t,zu),{minDaysInFirstWeek:o,startOfWeek:a}=Bu(s,i),u=te.now(),l=V(n.specificOffset)?r.offset(u):n.specificOffset,f=!V(s.ordinal),c=!V(s.year),d=!V(s.month)||!V(s.day),p=c||d,y=s.weekYear||s.weekNumber;if((p||f)&&y)throw new In("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(d&&f)throw new In("Can't mix ordinal dates with month/day");const D=y||s.weekday&&!p;let $,A,F=di(u,l);D?($=iw,A=nw,F=Vi(F,o,a)):f?($=sw,A=rw,F=Xs(F)):($=wd,A=gd);let I=!1;for(const dt of $){const sn=s[dt];V(sn)?I?s[dt]=A[dt]:s[dt]=F[dt]:I=!0}const _=D?Bp(s,o,a):f?Pp(s):Wf(s),G=_||qf(s);if(G)return U.invalid(G);const ve=D?Nu(s,o,a):f?xu(s):s,[It,ke]=Mi(ve,l,r),Re=new U({ts:It,zone:r,o:ke,loc:i});return s.weekday&&p&&t.weekday!==Re.weekday?U.invalid("mismatched weekday",`you can't specify both a weekday of ${s.weekday} and a date of ${Re.toISO()}`):Re.isValid?Re:U.invalid(Re.invalid)}static fromISO(t,n={}){const[r,i]=Cg(t);return $n(r,i,n,"ISO 8601",t)}static fromRFC2822(t,n={}){const[r,i]=kg(t);return $n(r,i,n,"RFC 2822",t)}static fromHTTP(t,n={}){const[r,i]=Sg(t);return $n(r,i,n,"HTTP",n)}static fromFormat(t,n,r={}){if(V(t)||V(n))throw new ye("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:s=null}=r,o=H.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0}),[a,u,l,f]=ew(o,t,n);return f?U.invalid(f):$n(a,u,r,`format ${n}`,t,l)}static fromString(t,n,r={}){return U.fromFormat(t,n,r)}static fromSQL(t,n={}){const[r,i]=Pg(t);return $n(r,i,n,"SQL",t)}static invalid(t,n=null){if(!t)throw new ye("need to specify a reason the DateTime is invalid");const r=t instanceof st?t:new st(t,n);if(te.throwOnInvalid)throw new op(r);return new U({invalid:r})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,n={}){const r=md(t,H.fromObject(n));return r?r.map(i=>i?i.val:null).join(""):null}static expandFormat(t,n={}){return fd(Ee.parseFormat(t),H.fromObject(n)).map(i=>i.val).join("")}static resetCache(){Ni=void 0,xi={}}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?no(this).weekYear:NaN}get weekNumber(){return this.isValid?no(this).weekNumber:NaN}get weekday(){return this.isValid?no(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?ro(this).weekday:NaN}get localWeekNumber(){return this.isValid?ro(this).weekNumber:NaN}get localWeekYear(){return this.isValid?ro(this).weekYear:NaN}get ordinal(){return this.isValid?Xs(this.c).ordinal:NaN}get monthShort(){return this.isValid?ci.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?ci.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?ci.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?ci.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,n=6e4,r=ls(this.c),i=this.zone.offset(r-t),s=this.zone.offset(r+t),o=this.zone.offset(r-i*n),a=this.zone.offset(r-s*n);if(o===a)return[this];const u=r-o*n,l=r-a*n,f=di(u,o),c=di(l,a);return f.hour===c.hour&&f.minute===c.minute&&f.second===c.second&&f.millisecond===c.millisecond?[an(this,{ts:u}),an(this,{ts:l})]:[this]}get isInLeapYear(){return Zr(this.year)}get daysInMonth(){return Ui(this.year,this.month)}get daysInYear(){return this.isValid?_n(this.year):NaN}get weeksInWeekYear(){return this.isValid?Sr(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?Sr(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:n,numberingSystem:r,calendar:i}=Ee.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:n,numberingSystem:r,outputCalendar:i}}toUTC(t=0,n={}){return this.setZone(Ae.instance(t),n)}toLocal(){return this.setZone(te.defaultZone)}setZone(t,{keepLocalTime:n=!1,keepCalendarTime:r=!1}={}){if(t=qt(t,te.defaultZone),t.equals(this.zone))return this;if(t.isValid){let i=this.ts;if(n||r){const s=t.offset(this.ts),o=this.toObject();[i]=Mi(o,s,t)}return an(this,{ts:i,zone:t})}else return U.invalid(gr(t))}reconfigure({locale:t,numberingSystem:n,outputCalendar:r}={}){const i=this.loc.clone({locale:t,numberingSystem:n,outputCalendar:r});return an(this,{loc:i})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const n=Wi(t,zu),{minDaysInFirstWeek:r,startOfWeek:i}=Bu(n,this.loc),s=!V(n.weekYear)||!V(n.weekNumber)||!V(n.weekday),o=!V(n.ordinal),a=!V(n.year),u=!V(n.month)||!V(n.day),l=a||u,f=n.weekYear||n.weekNumber;if((l||o)&&f)throw new In("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&o)throw new In("Can't mix ordinal dates with month/day");let c;s?c=Nu({...Vi(this.c,r,i),...n},r,i):V(n.ordinal)?(c={...this.toObject(),...n},V(n.day)&&(c.day=Math.min(Ui(c.year,c.month),c.day))):c=xu({...Xs(this.c),...n});const[d,p]=Mi(c,this.o,this.zone);return an(this,{ts:d,o:p})}plus(t){if(!this.isValid)return this;const n=z.fromDurationLike(t);return an(this,qu(this,n))}minus(t){if(!this.isValid)return this;const n=z.fromDurationLike(t).negate();return an(this,qu(this,n))}startOf(t,{useLocaleWeeks:n=!1}={}){if(!this.isValid)return this;const r={},i=z.normalizeUnit(t);switch(i){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break}if(i==="weeks")if(n){const s=this.loc.getStartOfWeek(),{weekday:o}=this;o<s&&(r.weekNumber=this.weekNumber-1),r.weekday=s}else r.weekday=1;if(i==="quarters"){const s=Math.ceil(this.month/3);r.month=(s-1)*3+1}return this.set(r)}endOf(t,n){return this.isValid?this.plus({[t]:1}).startOf(t,n).minus(1):this}toFormat(t,n={}){return this.isValid?Ee.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this,t):to}toLocaleString(t=_i,n={}){return this.isValid?Ee.create(this.loc.clone(n),t).formatDateTime(this):to}toLocaleParts(t={}){return this.isValid?Ee.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:n=!1,suppressMilliseconds:r=!1,includeOffset:i=!0,extendedZone:s=!1}={}){if(!this.isValid)return null;const o=t==="extended";let a=io(this,o);return a+="T",a+=ju(this,o,n,r,i,s),a}toISODate({format:t="extended"}={}){return this.isValid?io(this,t==="extended"):null}toISOWeekDate(){return hi(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:n=!1,includeOffset:r=!0,includePrefix:i=!1,extendedZone:s=!1,format:o="extended"}={}){return this.isValid?(i?"T":"")+ju(this,o==="extended",n,t,r,s):null}toRFC2822(){return hi(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return hi(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?io(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:n=!1,includeOffsetSpace:r=!0}={}){let i="HH:mm:ss.SSS";return(n||t)&&(r&&(i+=" "),n?i+="z":t&&(i+="ZZ")),hi(this,i,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():to}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const n={...this.c};return t.includeConfig&&(n.outputCalendar=this.outputCalendar,n.numberingSystem=this.loc.numberingSystem,n.locale=this.loc.locale),n}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,n="milliseconds",r={}){if(!this.isValid||!t.isValid)return z.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...r},s=Rp(n).map(z.normalizeUnit),o=t.valueOf()>this.valueOf(),a=o?this:t,u=o?t:this,l=Ug(a,u,s,i);return o?l.negate():l}diffNow(t="milliseconds",n={}){return this.diff(U.now(),t,n)}until(t){return this.isValid?oe.fromDateTimes(this,t):this}hasSame(t,n,r){if(!this.isValid)return!1;const i=t.valueOf(),s=this.setZone(t.zone,{keepLocalTime:!0});return s.startOf(n,r)<=i&&i<=s.endOf(n,r)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const n=t.base||U.fromObject({},{zone:this.zone}),r=t.padding?this<n?-t.padding:t.padding:0;let i=["years","months","days","hours","minutes","seconds"],s=t.unit;return Array.isArray(t.unit)&&(i=t.unit,s=void 0),Ku(n,this.plus(r),{...t,numeric:"always",units:i,unit:s})}toRelativeCalendar(t={}){return this.isValid?Ku(t.base||U.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(U.isDateTime))throw new ye("min requires all arguments be DateTimes");return Pu(t,n=>n.valueOf(),Math.min)}static max(...t){if(!t.every(U.isDateTime))throw new ye("max requires all arguments be DateTimes");return Pu(t,n=>n.valueOf(),Math.max)}static fromFormatExplain(t,n,r={}){const{locale:i=null,numberingSystem:s=null}=r,o=H.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});return hd(o,t,n)}static fromStringExplain(t,n,r={}){return U.fromFormatExplain(t,n,r)}static buildFormatParser(t,n={}){const{locale:r=null,numberingSystem:i=null}=n,s=H.fromOpts({locale:r,numberingSystem:i,defaultToEN:!0});return new dd(s,t)}static fromFormatParser(t,n,r={}){if(V(t)||V(n))throw new ye("fromFormatParser requires an input string and a format parser");const{locale:i=null,numberingSystem:s=null}=r,o=H.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});if(!o.equals(n.locale))throw new ye(`fromFormatParser called with a locale of ${o}, but the format parser was created for ${n.locale}`);const{result:a,zone:u,specificOffset:l,invalidReason:f}=n.explainFromTokens(t);return f?U.invalid(f):$n(a,u,r,`format ${n.format}`,t,l)}static get DATE_SHORT(){return _i}static get DATE_MED(){return bf}static get DATE_MED_WITH_WEEKDAY(){return lp}static get DATE_FULL(){return Ef}static get DATE_HUGE(){return Df}static get TIME_SIMPLE(){return vf}static get TIME_WITH_SECONDS(){return Af}static get TIME_WITH_SHORT_OFFSET(){return $f}static get TIME_WITH_LONG_OFFSET(){return Cf}static get TIME_24_SIMPLE(){return kf}static get TIME_24_WITH_SECONDS(){return Sf}static get TIME_24_WITH_SHORT_OFFSET(){return Ff}static get TIME_24_WITH_LONG_OFFSET(){return Tf}static get DATETIME_SHORT(){return Mf}static get DATETIME_SHORT_WITH_SECONDS(){return Nf}static get DATETIME_MED(){return xf}static get DATETIME_MED_WITH_SECONDS(){return Bf}static get DATETIME_MED_WITH_WEEKDAY(){return cp}static get DATETIME_FULL(){return Pf}static get DATETIME_FULL_WITH_SECONDS(){return Lf}static get DATETIME_HUGE(){return If}static get DATETIME_HUGE_WITH_SECONDS(){return Rf}}function ur(e){if(U.isDateTime(e))return e;if(e&&e.valueOf&&Kt(e.valueOf()))return U.fromJSDate(e);if(e&&typeof e=="object")return U.fromObject(e);throw new ye(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var R;(function(e){e.Years="years",e.Quarters="quarters",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(R||(R={}));R.Years+"",R.Quarters+"",R.Months+"",R.Weeks+"",R.Days+"",R.Hours+"",R.Minutes+"",R.Seconds+"",R.Milliseconds+"";R.Years+"",R.Quarters+"",R.Months+"",R.Weeks+"",R.Days+"",R.Hours+"",R.Minutes+"",R.Seconds+"",R.Milliseconds+"";const yd=[R.Milliseconds,R.Seconds,R.Minutes,R.Hours,R.Days,R.Weeks,R.Months,R.Quarters,R.Years];R.Milliseconds+"",R.Seconds+"",R.Minutes+"",R.Hours+"",R.Days+"",R.Weeks+"",R.Months+"",R.Quarters+"",R.Years+"";function uw(e){return yd.filter(t=>e[t])}function Go(e,{roundToDigits:t}){if(t==null)return e;const n=Math.pow(10,t),r=e*n;return Number((Math.round(r)/n).toFixed(t))}function lw(e){return Go(Math.max(e-.4,0),{roundToDigits:0})}function Yu(e){return e===0?0:Math.sign(e)}function lt(e,t,n={}){const r={},i={roundToDigits:n.roundToDigits==null?void 0:Math.round(Math.abs(n.roundToDigits))},s=Object.values(e).includes(1/0),o=Object.values(e).includes(-1/0);let a=z.fromObject(e).as(R.Milliseconds);const u=uw(t).reverse(),l=Yu(a);u.forEach((p,y)=>{const D=y===u.length-1;if(s&&o||s)r[p]=1/0;else if(o)r[p]=-1/0;else if(p===R.Milliseconds)r.milliseconds=Go(a,i);else{const $=z.fromObject({milliseconds:a}).as(p),A=Math.sign($),F=Math.abs($),I=D?Go(F,i):Math.floor(i.roundToDigits==null?F:lw(F)),_=I===0?0:I*A;r[p]=_,a-=z.fromObject({[p]:_}).as(R.Milliseconds),l!==Yu(a)&&(a=0)}});let f=!1;const c=[],d=yd.toReversed().filter(p=>r[p]?(f=!0,!0):f?(c.push(p),!1):!0);if(d.length<u.length){const p={};d.forEach(D=>p[D]=!0);const y=lt(e,p,i);return c.forEach(D=>y[D]=0),y}return r}var L;(function(e){e.Year="year",e.Quarter="quarter",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(L||(L={}));L.Year,L.Hour,L.Minute,L.Second,L.Millisecond;L.Quarter,L.Month,L.Week,L.Day;L.Millisecond,L.Second,L.Minute,L.Hour,L.Day,L.Week,L.Month,L.Quarter,L.Year;var be;(function(e){e.Sunday="Sunday",e.Monday="Monday",e.Tuesday="Tuesday",e.Wednesday="Wednesday",e.Thursday="Thursday",e.Friday="Friday",e.Saturday="Saturday"})(be||(be={}));be.Sunday+"",be.Monday+"",be.Tuesday+"",be.Wednesday+"",be.Thursday+"",be.Friday+"",be.Saturday+"";be.Sunday,be.Monday,be.Tuesday,be.Wednesday,be.Thursday,be.Friday,be.Saturday;var Te;(function(e){e.January="January",e.February="February",e.March="March",e.April="April",e.May="May",e.June="June",e.July="July",e.August="August",e.September="September",e.October="October",e.November="November",e.December="December"})(Te||(Te={}));Te.January,Te.February,Te.March,Te.April,Te.May,Te.June,Te.July,Te.August,Te.September,Te.October,Te.November,Te.December;const Ju={min:1,max:12},Hu={min:1,max:31},Qu={min:0,max:23},Xu={min:0,max:59},el={min:0,max:59},tl={min:0,max:999};function Fr(e){const t=new wf,n=lt(e,{milliseconds:!0}).milliseconds;return n!==1/0&&setTimeout(()=>{t.resolve()},n<=0?0:n),t.promise}var bd=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var Mt;(function(e){e.Node="node",e.Web="web"})(Mt||(Mt={}));function cw(){return bd?Mt.Node:Mt.Web}const Ed=cw();function fw(e){return Ed===e}function Dd(e){return e[Ed]()}let h=class extends Error{name="AssertionError";constructor(t,n){super(zr(n,t)||"Assertion failed.")}};const nl={interval:{milliseconds:100},timeout:{seconds:10}},so=Symbol("not set");async function vd(e,t,n){const{callback:r,extraAssertionArgs:i,failureMessage:s,options:o}=dw(t),a=lt(o.timeout,{milliseconds:!0}).milliseconds,u=lt(o.interval,{milliseconds:!0});let l=so,f;async function c(){try{l=n?r():await r(),e(l,...i)}catch(p){l=so,f=Pe(p)}}const d=Date.now();for(;l===so;)if(await c(),await Fr(u),Date.now()-d>=a){const y=`${s?`${s}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw Gr(f,y)}return l}function C(e,t=!1){return(...n)=>vd(e,n,t)}function dw(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(n=>{if(t.callback)t.extraAssertionArgs.push(n);else if(typeof n=="function")t.callback=n;else if(typeof n=="string")t.failureMessage=n;else if(typeof n=="object")t.options=n;else{if(n===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(n)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:Ad(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function Ad(e){return{interval:e?.interval||nl.interval,timeout:e?.timeout||nl.timeout}}const lr={isFalse(e,t){if(e!==!1)throw new h(`'${m(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new h(`'${m(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new h(`'${m(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new h(`'${m(e)}' is not truthy.`,t)}},$d={assert:lr,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new h(`'${m(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new h(`'${m(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new h(`'${m(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new h(`'${m(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:C(lr.isFalse),isFalsy:C(lr.isFalsy),isTrue:C(lr.isTrue),isTruthy:C(lr.isTruthy)}};function hw(e,t,n){if(typeof e=="string"){if(!e.endsWith(t))throw new h(`${m(e)} does not end with ${m(t)}}`,n)}else if(e[e.length-1]!==t)throw new h(`${m(e)} does not end with ${m(t)}}`,n)}function mw(e,t,n){if(typeof e=="string"){if(e.endsWith(t))throw new h(`${m(e)} ends with ${m(t)}}`,n)}else if(e[e.length-1]===t)throw new h(`${m(e)} ends with ${m(t)}}`,n)}function pw(e,t,n){if(typeof e=="string"){if(!e.startsWith(t))throw new h(`${m(e)} does not start with ${m(t)}}`,n)}else if(e[0]!==t)throw new h(`${m(e)} does not start with ${m(t)}}`,n)}function gw(e,t,n){if(typeof e=="string"){if(e.startsWith(t))throw new h(`${m(e)} starts with ${m(t)}}`,n)}else if(e[0]===t)throw new h(`${m(e)} starts with ${m(t)}}`,n)}const cr={endsWith:hw,endsWithout:mw,startsWith:pw,startsWithout:gw},Cd={assert:cr,check:{endsWith:(e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t,endsWithout:(e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t,startsWith:(e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t,startsWithout:(e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t},assertWrap:{endsWith:(e,t,n)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new h(`${m(e)} does not end with ${m(t)}}`,n)}else if(e[e.length-1]!==t)throw new h(`${m(e)} does not end with ${m(t)}}`,n);return e},endsWithout:(e,t,n)=>{if(typeof e=="string"){if(e.endsWith(t))throw new h(`${m(e)} ends with ${m(t)}}`,n)}else if(e[e.length-1]===t)throw new h(`${m(e)} ends with ${m(t)}}`,n);return e},startsWith:(e,t,n)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new h(`${m(e)} does not start with ${m(t)}}`,n)}else if(e[0]!==t)throw new h(`${m(e)} does not start with ${m(t)}}`,n);return e},startsWithout:(e,t,n)=>{if(typeof e=="string"){if(e.startsWith(t))throw new h(`${m(e)} starts with ${m(t)}}`,n)}else if(e[0]===t)throw new h(`${m(e)} starts with ${m(t)}}`,n);return e}},checkWrap:{endsWith:(e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e},endsWithout:(e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e},startsWith:(e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e},startsWithout:(e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e}},waitUntil:{endsWith:C(cr.endsWith),endsWithout:C(cr.endsWithout),startsWith:C(cr.startsWith),startsWithout:C(cr.startsWithout)}};function ww(e,t,n){const r=$t(t);if(!r.includes(e))throw new h(`${String(e)} is not an enum value in '${r.join(",")}'.`,n)}function vt(e,t){return $t(t).includes(e)}const oo={isEnumValue(e,t,n){ww(e,t,n)},isNotEnumValue(e,t,n){const r=$t(t);if(r.includes(e))throw new h(`${String(e)} is an enum value in '${r.join(",")}'.`,n)}},kd={assert:oo,check:{isEnumValue:vt,isNotEnumValue(e,t){return!$t(t).includes(e)}},assertWrap:{isEnumValue(e,t,n){const r=$t(t);if(!r.includes(e))throw new h(`${String(e)} is not an enum value in '${r.join(",")}'.`,n);return e},isNotEnumValue(e,t,n){const r=$t(t);if(r.includes(e))throw new h(`${String(e)} is not an enum value in '${r.join(",")}'.`,n);return e}},checkWrap:{isEnumValue(e,t){if($t(t).includes(e))return e},isNotEnumValue(e,t){if(!$t(t).includes(e))return e}},waitUntil:{isEnumValue:C(oo.isEnumValue),isNotEnumValue:C(oo.isNotEnumValue)}},ao={entriesEqual(e,t,n){if(!e||typeof e!="object")throw new h(`${m(e)} is not an object.`,n);if(!t||typeof t!="object")throw new h(`${m(t)} is not an object.`,n);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const s=e[i],o=t[i];if(s!==o)throw new h(`Entries are not equal at key '${String(i)}'.`,n)})},notEntriesEqual(e,t,n){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(s=>{const o=e[s],a=t[s];return o!==a}))throw new h("Entries are equal.",n)}},Sd={assert:ao,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(r=>{const i=e[r],s=t[r];return i===s})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(r=>{const i=e[r],s=t[r];return i!==s})}},assertWrap:{entriesEqual(e,t,n){if(!e||typeof e!="object")throw new h(`${m(e)} is not an object.`,n);if(!t||typeof t!="object")throw new h(`${m(t)} is not an object.`,n);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const s=e[i],o=t[i];if(s!==o)throw new h(`Entries are not equal at key '${String(i)}'.`,n)}),e},notEntriesEqual(e,t,n){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(s=>{const o=e[s],a=t[s];return o!==a}))return e;throw new h("Entries are equal.",n)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(i=>{const s=e[i],o=t[i];return s===o}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const s=e[i],o=t[i];return s!==o}))return e}},waitUntil:{entriesEqual:C(ao.entriesEqual),notEntriesEqual:C(ao.notEntriesEqual)}};function qi(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Tr(e,t){if(!(e===t||qi(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e).sort(),r=Object.keys(t).sort();if(n.length!==r.length)throw new Error("Values are not JSON equal.");if(!qi(n,r))throw new Error("Values are JSON equal.");Object.keys(e).forEach(s=>{try{Tr(e[s],t[s])}catch(o){throw new Error(`JSON objects are not equal at key '${s}': ${Ce(o)}`)}})}throw new Error("Values are not JSON equal.")}}function wr(e,t){if(e===t||qi(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length!==r.length||!qi(n,r)?!1:Object.keys(e).every(s=>wr(e[s],t[s]))}return!1}const uo={jsonEquals(e,t,n){try{Tr(e,t)}catch(r){throw new h(Ce(r),n)}},notJsonEquals(e,t,n){try{Tr(e,t)}catch{return}throw new h("Values are JSON equal.",n)}},Fd={assert:uo,check:{jsonEquals(e,t){return wr(e,t)},notJsonEquals(e,t){return!wr(e,t)}},assertWrap:{jsonEquals(e,t,n){try{return Tr(e,t),e}catch(r){throw new h(Ce(r),n)}},notJsonEquals(e,t,n){try{Tr(e,t)}catch{return e}throw new h("Values are JSON equal.",n)}},checkWrap:{jsonEquals(e,t){if(wr(e,t))return e},notJsonEquals(e,t){if(!wr(e,t))return e}},waitUntil:{jsonEquals:C(uo.jsonEquals),notJsonEquals:C(uo.notJsonEquals)}};/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */function rl(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function Td(){this._key="chai/deep-eql__"+Math.random()+Date.now()}Td.prototype={get:function(t){return t[this._key]},set:function(t,n){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:n,configurable:!0})}};var Md=typeof WeakMap=="function"?WeakMap:Td;/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/function il(e,t,n){if(!n||zn(e)||zn(t))return null;var r=n.get(e);if(r){var i=r.get(t);if(typeof i=="boolean")return i}return null}/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/function mi(e,t,n,r){if(!(!n||zn(e)||zn(t))){var i=n.get(e);i?i.set(t,r):(i=new Md,i.set(t,r),n.set(e,i))}}function Ve(e,t,n){if(n&&n.comparator)return sl(e,t,n);var r=Nd(e,t);return r!==null?r:sl(e,t,n)}function Nd(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:zn(e)||zn(t)?!1:null}/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/function sl(e,t,n){n=n||{},n.memoize=n.memoize===!1?!1:n.memoize||new Md;var r=n&&n.comparator,i=il(e,t,n.memoize);if(i!==null)return i;var s=il(t,e,n.memoize);if(s!==null)return s;if(r){var o=r(e,t);if(o===!1||o===!0)return mi(e,t,n.memoize,o),o;var a=Nd(e,t);if(a!==null)return a}var u=rl(e);if(u!==rl(t))return mi(e,t,n.memoize,!1),!1;mi(e,t,n.memoize,!0);var l=yw(e,t,u,n);return mi(e,t,n.memoize,l),l}function yw(e,t,n,r){switch(n){case"String":case"Number":case"Boolean":case"Date":return Ve(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return xd(e,t,["name","message","code"],r);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return wn(e,t,r);case"RegExp":return bw(e,t);case"Generator":return Ew(e,t,r);case"DataView":return wn(new Uint8Array(e.buffer),new Uint8Array(t.buffer),r);case"ArrayBuffer":return wn(new Uint8Array(e),new Uint8Array(t),r);case"Set":return ol(e,t,r);case"Map":return ol(e,t,r);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return vw(e,t,r)}}/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */function bw(e,t){return e.toString()===t.toString()}/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function ol(e,t,n){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var r=[],i=[];return e.forEach(function(o,a){r.push([o,a])}),t.forEach(function(o,a){i.push([o,a])}),wn(r.sort(),i.sort(),n)}/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function wn(e,t,n){var r=e.length;if(r!==t.length)return!1;if(r===0)return!0;for(var i=-1;++i<r;)if(Ve(e[i],t[i],n)===!1)return!1;return!0}/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Ew(e,t,n){return wn(Ko(e),Ko(t),n)}/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */function Dw(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */function al(e){if(Dw(e))try{return Ko(e[Symbol.iterator]())}catch{return[]}return[]}/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */function Ko(e){for(var t=e.next(),n=[t.value];t.done===!1;)t=e.next(),n.push(t.value);return n}/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */function ul(e){var t=[];for(var n in e)t.push(n);return t}function ll(e){for(var t=[],n=Object.getOwnPropertySymbols(e),r=0;r<n.length;r+=1){var i=n[r];Object.getOwnPropertyDescriptor(e,i).enumerable&&t.push(i)}return t}/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function xd(e,t,n,r){var i=n.length;if(i===0)return!0;for(var s=0;s<i;s+=1)if(Ve(e[n[s]],t[n[s]],r)===!1)return!1;return!0}/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function vw(e,t,n){var r=ul(e),i=ul(t),s=ll(e),o=ll(t);if(r=r.concat(s),i=i.concat(o),r.length&&r.length===i.length)return wn(cl(r).sort(),cl(i).sort())===!1?!1:xd(e,t,r,n);var a=al(e),u=al(t);return a.length&&a.length===u.length?(a.sort(),u.sort(),wn(a,u,n)):r.length===0&&a.length===0&&i.length===0&&u.length===0}/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */function zn(e){return e===null||typeof e!="object"}function cl(e){return e.map(function(n){return typeof n=="symbol"?n.toString():n})}const Vt={strictEquals(e,t,n){if(e!==t)throw new h(`

${m(e)}

does not strictly equal

${m(t)}

`,n)},notStrictEquals(e,t,n){if(e===t)throw new h(`

${m(e)}

strictly equals

${m(t)}

`,n)},looseEquals(e,t,n){if(e!=t)throw new h(`

${m(e)}

does not loosely equal

${m(t)}

`,n)},notLooseEquals(e,t,n){if(e==t)throw new h(`

${m(e)}

loosely equals

${m(t)}

`,n)},deepEquals(e,t,n){if(!Ve(e,t))throw new h(`

${m(e)}

does not deeply equal

${m(t)}

`,n)},notDeepEquals(e,t,n){if(Ve(e,t))throw new h(`

${m(e)}

deeply equals

${m(t)}

`,n)}},Bd=Vt.deepEquals,Pd={assert:Vt,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return Ve(e,t)},notDeepEquals(e,t){return!Ve(e,t)}},assertWrap:{strictEquals(e,t,n){if(e===t)return e;throw new h(`

${m(e)}

does not strictly equal

${m(t)}

`,n)},notStrictEquals(e,t,n){if(e===t)throw new h(`

${m(e)}

strictly equals

${m(t)}

`,n);return e},looseEquals(e,t,n){if(e==t)return e;throw new h(`

${m(e)}

does not loosely equal

${m(t)}

`,n)},notLooseEquals(e,t,n){if(e==t)throw new h(`

${m(e)}

loosely equals

${m(t)}

`,n);return e},deepEquals(e,t,n){if(Ve(e,t))return e;throw new h(`

${m(e)}

does not deeply equal

${m(t)}

`,n)},notDeepEquals(e,t,n){if(Ve(e,t))throw new h(`

${m(e)}

deeply equals

${m(t)}

`,n);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(Ve(e,t))return e},notDeepEquals(e,t){if(!Ve(e,t))return e}},waitUntil:{strictEquals:C(Vt.strictEquals),notStrictEquals:C(Vt.notStrictEquals),looseEquals:C(Vt.looseEquals),notLooseEquals:C(Vt.notLooseEquals),deepEquals:C(Vt.deepEquals),notDeepEquals:C(Vt.notDeepEquals)}};function _e(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let n=!0;try{n=Reflect.ownKeys(e).map(r=>e[r]).includes(t)}catch{return!1}return n}function Je(e,t){return typeof t=="string"?t.includes(e):_e(t,e)}const Et={hasValue(e,t,n){if(!_e(e,t))throw new h(`'${m(e)}' does not have value '${m(t)}'.`,n)},lacksValue(e,t,n){if(_e(e,t))throw new h(`'${m(e)}' has value '${m(t)}'.`,n)},hasValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);r=t.filter(s=>!i.includes(s))}catch{throw new h(`'${m(e)}' does not have values '${m(t)}'.`,n)}if(r.length)throw new h(`'${m(e)}' does not have values '${m(r)}'.`,n)},lacksValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);r=t.filter(s=>i.includes(s))}catch{}if(r.length)throw new h(`'${m(e)}' has values '${m(r)}'.`,n)},isIn(e,t,n){if(!Je(e,t))throw new h(`'${m(e)}'

is not in

${m(t)}.`,n)},isNotIn(e,t,n){if(Je(e,t))throw new h(`'${m(e)}'

is in

${m(t)}.`,n)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new h(`'${m(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new h(`'${m(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new h(`'${m(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new h(`'${m(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new h(`'${m(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new h(`'${m(e)}' is not empty.`,t)}}},Ld={assert:Et,check:{hasValue(e,t){return _e(e,t)},lacksValue(e,t){return!_e(e,t)},hasValues(e,t){return t.every(n=>_e(e,n))},lacksValues(e,t){return t.every(n=>!_e(e,n))},isIn(e,t){return Je(e,t)},isNotIn(e,t){return!Je(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,n){if(!_e(e,t))throw new h(`'${m(e)}' does not have value '${m(t)}'.`,n);return e},lacksValue(e,t,n){if(_e(e,t))throw new h(`'${m(e)}' has value '${m(t)}'.`,n);return e},hasValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);r=t.filter(s=>!i.includes(s))}catch{throw new h(`'${m(e)}' does not have values '${m(t)}'.`,n)}if(r.length)throw new h(`'${m(e)}' does not have values '${m(r)}'.`,n);return e},lacksValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);r=t.filter(s=>i.includes(s))}catch{}if(r.length)throw new h(`'${m(e)}' has values '${m(r)}'.`,n);return e},isIn(e,t,n){if(!Je(e,t))throw new h(`'${m(e)}'

is not in

${m(t)}.`,n);return e},isNotIn(e,t,n){if(Je(e,t))throw new h(`'${m(e)}'

is in

${m(t)}.`,n);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new h(`'${m(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new h(`'${m(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new h(`'${m(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new h(`'${m(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new h(`'${m(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new h(`'${m(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(_e(e,t))return e},lacksValue(e,t){if(!_e(e,t))return e},hasValues(e,t){if(t.every(n=>_e(e,n)))return e},lacksValues(e,t){if(!t.every(n=>_e(e,n)))return e},isIn(e,t){if(Je(e,t))return e},isNotIn(e,t){if(!Je(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:C(Et.hasValue),lacksValue:C(Et.lacksValue),hasValues:C(Et.hasValues),lacksValues:C(Et.lacksValues),isIn:C(Et.isIn),isNotIn:C(Et.isNotIn),isEmpty:C(Et.isEmpty),isNotEmpty:C(Et.isNotEmpty)}},lo={isHttpStatus(e,t){if(!vt(e,b))throw new h(`${m(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,n){if(vt(e,b)){if(!Je(e,Fi[t]))throw new h(`${m(e)} is not a '${t}' HTTP status.`,n)}else throw new h(`${m(e)} is not a valid HTTP status.`,n)}},Id={assert:lo,check:{isHttpStatus(e){return vt(e,b)},isHttpStatusCategory(e,t){return vt(e,b)&&Je(e,Fi[t])}},assertWrap:{isHttpStatus(e,t){if(!vt(e,b))throw new h(`${m(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,n){if(vt(e,b)){if(!Je(e,Fi[t]))throw new h(`${m(e)} is not a '${t}' HTTP status.`,n)}else throw new h(`${m(e)} is not a valid HTTP status.`,n);return e}},checkWrap:{isHttpStatus(e){if(vt(e,b))return e},isHttpStatusCategory(e,t){if(vt(e,b)&&Je(e,Fi[t]))return e}},waitUntil:{isHttpStatus:C(lo.isHttpStatus),isHttpStatusCategory:C(lo.isHttpStatusCategory)}},co={instanceOf(e,t,n){if(!(e instanceof t))throw new h(`'${m(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new h(`'${m(e)}' is an instance of '${t.name}'`,n)}},Rd={assert:co,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,n){if(e instanceof t)return e;throw new h(`'${m(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new h(`'${m(e)}' is an instance of '${t.name}'`,n);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:C(co.instanceOf),notInstanceOf:C(co.notInstanceOf)}},Aw=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function ee(e,t){return Aw.some(n=>{try{return n(e,t)}catch{return!1}})}const un={isKeyOf(e,t,n){if(!ee(t,e))throw new h(`'${String(e)}' is not a key of '${m(t)}'.`,n)},isNotKeyOf(e,t,n){if(ee(t,e))throw new h(`'${String(e)}' is a key of '${m(t)}'.`,n)},hasKey(e,t,n){if(!ee(e,t))throw new h(`'${m(e)}' does not have key '${String(t)}'.`,n)},lacksKey(e,t,n){if(ee(e,t))throw new h(`'${m(e)}' has key '${String(t)}'.`,n)},hasKeys(e,t,n){const r=t.filter(i=>!ee(e,i));if(r.length)throw new h(`'${m(e)}' does not have keys '${r.join(",")}'.`,n)},lacksKeys(e,t,n){const r=t.filter(i=>ee(e,i));if(r.length)throw new h(`'${m(e)}' does not lack keys '${r.join(",")}'.`,n)}},Od={assert:un,check:{isKeyOf(e,t){return ee(t,e)},isNotKeyOf(e,t){return!ee(t,e)},hasKey:ee,lacksKey(e,t){return!ee(e,t)},hasKeys(e,t){return t.every(n=>ee(e,n))},lacksKeys(e,t){return t.every(n=>!ee(e,n))}},assertWrap:{isKeyOf(e,t,n){if(!ee(t,e))throw new h(`'${String(e)}' is not a key of '${m(t)}'.`,n);return e},isNotKeyOf(e,t,n){if(ee(t,e))throw new h(`'${String(e)}' is a key of '${m(t)}'.`,n);return e},hasKey(e,t,n){if(!ee(e,t))throw new h(`'${m(e)}' does not have key '${String(t)}'.`,n);return e},lacksKey(e,t,n){if(ee(e,t))throw new h(`'${m(e)}' has key '${String(t)}'.`,n);return e},hasKeys(e,t,n){const r=t.filter(i=>!ee(e,i));if(r.length)throw new h(`'${m(e)}' does not have keys '${r.join(",")}'.`,n);return e},lacksKeys(e,t,n){const r=t.filter(i=>ee(e,i));if(r.length)throw new h(`'${m(e)}' does not lack keys '${r.join(",")}'.`,n);return e}},checkWrap:{isKeyOf(e,t){if(ee(t,e))return e},isNotKeyOf(e,t){if(!ee(t,e))return e},hasKey(e,t){if(ee(e,t))return e},lacksKey(e,t){if(!ee(e,t))return e},hasKeys(e,t){if(t.every(n=>ee(e,n)))return e},lacksKeys(e,t){if(t.every(n=>!ee(e,n)))return e}},waitUntil:{isKeyOf:C(un.isKeyOf),isNotKeyOf:C(un.isNotKeyOf),hasKey:C(un.hasKey),lacksKey:C(un.lacksKey),hasKeys:C(un.hasKeys),lacksKeys:C(un.lacksKeys)}};function $w(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:J(e).length)<t)throw new h(`Length '${e.length}' is not at least '${t}'.`,n)}function Cw(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:J(e).length)!==t)throw new h(`Length '${e.length}' is not exactly '${t}'.`,n)}const fo={isLengthAtLeast:$w,isLengthExactly:Cw},_d={assert:fo,check:{isLengthAtLeast:(e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:J(e).length)>=t,isLengthExactly:(e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:J(e).length)===t},assertWrap:{isLengthAtLeast:(e,t,n)=>{if((Array.isArray(e)||typeof e=="string"?e.length:J(e).length)<t)throw new h(`Length '${e.length}' is not at least '${t}'.`,n);return e},isLengthExactly:(e,t,n)=>{if((Array.isArray(e)||typeof e=="string"?e.length:J(e).length)!==t)throw new h(`Length '${e.length}' is not exactly '${t}'.`,n);return e}},checkWrap:{isLengthAtLeast:(e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:J(e).length)>=t)return e},isLengthExactly:(e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:J(e).length)===t)return e}},waitUntil:{isLengthAtLeast:C(fo.isLengthAtLeast),isLengthExactly:C(fo.isLengthExactly)}},ho={isDefined(e,t){if(e==null)throw new h(`'${m(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new h(`'${m(e)}' is not a nullish.`,t)}},Vd={assert:ho,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new h(`'${m(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new h(`'${m(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:C(ho.isDefined),isNullish:C(ho.isNullish)}},Se={isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new h(`${e} is not within the bounds ${m({min:n,max:t})}`,r)},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new h(`${e} is not outside the bounds ${m({min:t,max:n})}`,r)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new h(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new h(`${e} is an integer.`,t)},isAbove(e,t,n){if(e<=t)throw new h(`${e} is not above ${t}`,n)},isAtLeast(e,t,n){if(e<t)throw new h(`${e} is not at least ${t}`,n)},isBelow(e,t,n){if(e>=t)throw new h(`${e} is not below ${t}`,n)},isAtMost(e,t,n){if(e>t)throw new h(`${e} is not at most ${t}`,n)},isNaN(e,t){if(!isNaN(e))throw new h(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new h(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new h(`${e} is not infinite`,t)},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new h(`${e} is not within ±${n} of ${t}`,r)},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new h(`${e} is within ±${n} of ${t}`,r)}},Ud={assert:Se,check:{isInBounds(e,{max:t,min:n}){return n<=e&&e<=t},isOutBounds(e,{max:t,min:n}){return e<n||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,n){return t-n<=e&&e<=t+n},isNotApproximately(e,t,n){return e<t-n||e>t+n}},assertWrap:{isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new h(`${e} is not within the bounds ${m({min:n,max:t})}`,r);return e},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new h(`${e} is not outside the bounds ${m({min:t,max:n})}`,r);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new h(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new h(`${e} is an integer.`,t);return e},isAbove(e,t,n){if(e<=t)throw new h(`${e} is not above ${t}`,n);return e},isAtLeast(e,t,n){if(e<t)throw new h(`${e} is not at least ${t}`,n);return e},isBelow(e,t,n){if(e>=t)throw new h(`${e} is not below ${t}`,n);return e},isAtMost(e,t,n){if(e>t)throw new h(`${e} is not at most ${t}`,n);return e},isNaN(e,t){if(!isNaN(e))throw new h(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new h(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new h(`${e} is not infinite`,t);return e},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new h(`${e} is not within ±${n} of ${t}`,r);return e},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new h(`${e} is within ±${n} of ${t}`,r);return e}},checkWrap:{isInBounds(e,{max:t,min:n}){if(n<=e&&e<=t)return e},isOutBounds(e,{max:t,min:n}){if(e<n||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,n){if(t-n<=e&&e<=t+n)return e},isNotApproximately(e,t,n){if(e<t-n||e>t+n)return e}},waitUntil:{isInBounds:C(Se.isInBounds),isOutBounds:C(Se.isOutBounds),isInteger:C(Se.isInteger),isNotInteger:C(Se.isNotInteger),isAbove:C(Se.isAbove),isAtLeast:C(Se.isAtLeast),isBelow:C(Se.isBelow),isAtMost:C(Se.isAtMost),isNaN:C(Se.isNaN),isFinite:C(Se.isFinite),isInfinite:C(Se.isInfinite),isApproximately:C(Se.isApproximately),isNotApproximately:C(Se.isNotApproximately)}};function kw(e,t,n,r,i){return Hr(...ds(e,t,n,r,i),!1)}function ds(e,t,n,r,i){const s=Array.isArray(n);return[s?e:Bd,s?t:e,s?n:t,s?r:n,s?i:r]}function Hr(e,t,n,r,i,s){const o=t(...n);if(o instanceof Promise)return new Promise(async(a,u)=>{try{const l=await o;e(l,r),s?a(l):a()}catch(l){u(new h(`Output from '${t.name}' did not produce expected output with input: ${m(n)}: ${Ce(l)}`,i))}});try{return e(o,r),s?o:void 0}catch(a){throw new h(`Output from '${t.name}' did not produce expected output with input: ${m(n)}: ${Ce(a)}`,i)}}function Sw(e,t,n,r,i){try{const s=Hr(...ds(e,t,n,r,i),!1);return s instanceof Promise?new Promise(async o=>{try{await s,o(!0)}catch{o(!1)}}):!0}catch{return!1}}function Fw(e,t,n,r,i){return Hr(...ds(e,t,n,r,i),!0)}function Tw(e,t,n,r,i){try{const s=Hr(...ds(e,t,n,r,i),!0);return s instanceof Promise?new Promise(async o=>{try{o(await s)}catch{o(void 0)}}):s}catch{return}}const mo=Symbol("not set");async function Mw(e,t,n,r,i,s){const o=Array.isArray(n),a=o?e:Bd,u=o?t:e,l=o?n:t,f=o?r:n,c=Ad(o?i:r),d=o?s:i,p=lt(c.timeout,{milliseconds:!0}).milliseconds,y=lt(c.interval,{milliseconds:!0});let D=mo,$;async function A(){try{D=await Hr(a,u,l,f,void 0,!0)}catch(I){D=mo,$=Pe(I)}}const F=Date.now();for(;D===mo;)if(await A(),await Fr(y),Date.now()-F>=p)throw Gr($,zr(d,`Timeout of '${p}' milliseconds exceeded waiting for callback value to match expectations`));return D}const Nw={output:kw},Wd={assert:Nw,check:{output:Sw},assertWrap:{output:Fw},checkWrap:{output:Tw},waitUntil:{output:Mw}},fr={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new h(`'${m(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new h(`'${m(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new h(`'${m(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new h(`'${m(e)}' is not a Primitive.`,t)}},qd={assert:fr,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new h(`'${m(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new h(`'${m(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new h(`'${m(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new h(`'${m(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:C(fr.isNotPrimitive),isNotPropertyKey:C(fr.isNotPropertyKey),isPrimitive:C(fr.isPrimitive),isPropertyKey:C(fr.isPropertyKey)}},dr={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new h(`'${m(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new h(`'${m(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new h(`'${m(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new h(`'${m(e)}' is a Promise.`,t)}},jd={assert:dr,check:{isPromiseLike(e){return!!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new h(`'${m(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new h(`'${m(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new h(`'${m(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new h(`'${m(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:C(dr.isPromiseLike,!0),isNotPromiseLike:C(dr.isNotPromiseLike,!0),isPromise:C(dr.isPromise,!0),isNotPromise:C(dr.isNotPromise,!0)}},po={matches(e,t,n){if(!t.test(e))throw new h(`'${e}' does not match ${t}`,n)},mismatches(e,t,n){if(t.test(e))throw new h(`'${e}' matches ${t}`,n)}},zd={assert:po,check:{matches(e,t){return!!t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,n){if(!t.test(e))throw new h(`'${e}' does not match ${t}`,n);return e},mismatches(e,t,n){if(t.test(e))throw new h(`'${e}' matches ${t}`,n);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:C(po.matches,!0),mismatches:C(po.mismatches,!0)}},ae={isArray(e,t){if(!Array.isArray(e))throw new h(`'${m(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new h(`'${m(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new h(`'${m(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new h(`'${m(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new h(`'${m(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new h(`'${m(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new h(`'${m(e)}' is not a non-null object.`,t)},isString(e,t){if(typeof e!="string")throw new h(`'${m(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new h(`'${m(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new h(`'${m(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new h(`'${m(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new h(`'${m(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new h(`'${m(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new h(`'${m(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new h(`'${m(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number")throw new h(`'${m(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new h(`'${m(e)}' is a non-null object.`,t)},isNotString(e,t){if(typeof e=="string")throw new h(`'${m(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new h(`'${m(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new h(`'${m(e)}' is a undefined.`,t)}},Gd={assert:ae,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new h(`'${m(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new h(`'${m(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new h(`'${m(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new h(`'${m(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new h(`'${m(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new h(`'${m(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new h(`'${m(e)}' is not a non-null object.`,t);return e},isString(e,t){if(typeof e!="string")throw new h(`'${m(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new h(`'${m(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new h(`'${m(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new h(`'${m(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new h(`'${m(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new h(`'${m(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new h(`'${m(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new h(`'${m(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number")throw new h(`'${m(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new h(`'${m(e)}' is a non-null object.`,t);return e},isNotString(e,t){if(typeof e=="string")throw new h(`'${m(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new h(`'${m(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new h(`'${m(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number")return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(typeof e!="number")return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:C(ae.isArray),isBigInt:C(ae.isBigInt),isBoolean:C(ae.isBoolean),isFunction:C(ae.isFunction),isNull:C(ae.isNull),isNumber:C(ae.isNumber),isObject:C(ae.isObject),isString:C(ae.isString),isSymbol:C(ae.isSymbol),isUndefined:C(ae.isUndefined),isNotArray:C(ae.isNotArray),isNotBigInt:C(ae.isNotBigInt),isNotBoolean:C(ae.isNotBoolean),isNotFunction:C(ae.isNotFunction),isNotNull:C(ae.isNotNull),isNotNumber:C(ae.isNotNumber),isNotObject:C(ae.isNotObject),isNotString:C(ae.isNotString),isNotSymbol:C(ae.isNotSymbol),isNotUndefined:C(ae.isNotUndefined)}};var Me;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(Me||(Me={}));function Ta(e,t,n){Ma(e,{noError:"No error.",notInstance:`'${m(e)}' is not an error instance.`},t,n)}function fl(e,t,n){Ma(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${m(e)}' is not an error instance.`},t,n)}function Ma(e,t,n,r){if(e)if(e instanceof Error){if(n?.matchConstructor&&!(e instanceof n.matchConstructor)){const i=e.constructor.name;throw new h(`Error constructor '${i}' did not match expected constructor '${n.matchConstructor.name}'.`,r)}else if(n?.matchMessage){const i=Ce(e);if(typeof n.matchMessage=="string"){if(!i.includes(n.matchMessage))throw new h(`Error message

'${i}'

does not contain

'${n.matchMessage}'.`,r)}else if(!i.match(n.matchMessage))throw new h(`Error message

'${i}'

does not match RegExp

'${n.matchMessage}'.`,r)}}else throw new h(t.notInstance,r);else throw new h(t.noError,r)}function dl(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const n=Ce(e);if(typeof t.matchMessage=="string"){if(!n.includes(t.matchMessage))return!1}else if(!n.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function hs(e,t,n,r){let i;try{const s=t instanceof Promise?t:t();if(s instanceof Promise)return new Promise(async(o,a)=>{try{await s}catch(u){i=Pe(u)}try{fl(i,n,r),e===Me.Assert?o():e===Me.Check?o(!0):o(i)}catch(u){e===Me.CheckWrap?o(void 0):e===Me.Check?o(!1):a(Pe(u))}})}catch(s){i=Pe(s)}try{return fl(i,n,r),e===Me.Check?!0:e!==Me.Assert?i:void 0}catch(s){if(e===Me.CheckWrap)return;if(e===Me.Check)return!1;throw s}}function xw(e,t,n){return hs(Me.Assert,e,t,n)}function Bw(e,t){return hs(Me.Check,e,t)}function Pw(e,t,n){return hs(Me.AssertWrap,e,t,n)}function Lw(e,t,n){return hs(Me.CheckWrap,e,t,n)}const Iw=C(Ta);function Rw(e,t,n,r){const i=typeof e=="function"||e instanceof Promise?void 0:e,s=i?t:e,o=typeof n=="object"?r:n,a=typeof n=="object"?n:t;if(typeof s!="function")throw new TypeError(`Callback is not a function, got '${m(s)}'`);return Iw(i,async()=>{try{await s();return}catch(u){return Pe(u)}},a,o)}const Ow={throws:xw,isError:Ta},Kd={assert:Ow,check:{throws:Bw,isError(e,t){return dl(e,t)}},assertWrap:{throws:Pw,isError(e,t,n){return Ma(e,{noError:"No error.",notInstance:`'${m(e)}' is not an error instance.`},t,n),e}},checkWrap:{throws:Lw,isError(e,t){if(dl(e,t))return e}},waitUntil:{throws:Rw,isError:C(Ta)}},Wt=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,go={isUuid(e,t){if(!String(e).match(Wt))throw new h(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(Wt))throw new h(`'${String(e)}' is a UUID.`,t)}},Zd={assert:go,check:{isUuid(e){return!!String(e).match(Wt)},isNotUuid(e){return!String(e).match(Wt)}},assertWrap:{isUuid(e,t){if(!String(e).match(Wt))throw new h(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(Wt))throw new h(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(Wt))return e},isNotUuid(e){if(!String(e).match(Wt))return e}},waitUntil:{isUuid:C(go.isUuid),isNotUuid:C(go.isNotUuid)}},_w={...$d.assert,...Cd.assert,...Sd.assert,...kd.assert,...Rd.assert,...Fd.assert,...Od.assert,..._d.assert,...Vd.assert,...Ud.assert,...qd.assert,...jd.assert,...zd.assert,...Gd.assert,...Pd.assert,...Kd.assert,...Zd.assert,...Ld.assert,...Id.assert,...Wd.assert},ms=[$d,Cd,Sd,kd,Rd,Fd,Od,_d,Vd,Ud,qd,jd,zd,Gd,Pd,Kd,Zd,Ld,Id,Wd],Vw=Object.assign({},...ms.map(e=>e.check)),E=Object.assign(function(t){return!!t},Vw);function Uw(e,t,n){return Bi(e,t,n,new Set)}function Bi(e,t,n,r){if(e=hl(e),t=hl(t),E.isObject(e)&&E.isObject(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),!Bi(J(e).sort(),J(t).sort(),n,r))return!1;let i=!1;const s=J(e).map(o=>{const a=Bi(e[o],t[o],n,r);return E.isPromise(a)&&(i=!0),a});return ml(i,s)}else if(E.isArray(e)&&E.isArray(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),e.length!==t.length)return!1;let i=!1;const s=e.map((o,a)=>{const u=Bi(o,t[a],n,r);return E.isPromise(u)&&(i=!0),u});return ml(i,s)}else return n(e,t)}function hl(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function ml(e,t){return e?new Promise(async(n,r)=>{try{const i=await Promise.all(t);n(i.every(E.isTrue))}catch(i){r(Pe(i))}}):t.every(E.isTrue)}const Ww=Object.assign({},...ms.map(e=>e.assertWrap));Object.assign(function(t,n){if(!t)throw new h("Assertion failed.",n);return t},Ww);function qw(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const jw={tsType:qw},zw={assert:jw},Gw={fail:e=>{throw new h("Failure triggered.",e)}},Kw={...zw.assert,..._w,...Gw},ir=Object.assign(function(t,n){if(!t)throw new h("Assertion failed.",n)},Kw),Zw=Object.assign({},...ms.map(e=>e.checkWrap));Object.assign(function(t){if(t)return t},Zw);const Yw=Object.assign({},...ms.map(e=>e.waitUntil));Object.assign(function(t,n){return vd((r,i)=>{if(!r)throw new h("Assertion failed.",i)},[t,n],!1)},Yw);function Jw(e,t){return E.hasKey(e,"entryType")&&e.entryType===t}function Cn(e,t){return e.controlType===t}var Y=(e=>(e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text",e))(Y||{});const Yd=Symbol("any-type"),Hw={checkbox:!1,color:"",dropdown:"",hidden:Yd,number:0,text:""};function Qw(e,t){if(!e)return[];const n=[];return Object.entries(e).forEach(([r,i])=>{const s=Hw[i.controlType];s!==Yd&&(typeof s!=typeof i.initValue&&n.push(new Error(`Control '${r}' in page '${t}' has invalid initValue '${i.initValue}': expected initValue of type ${typeof s} because the control is of type ${i.controlType}.`)),r||n.push(new Error(`'${t}' cannot have an empty control name.`)))}),n}function Xw(e,t,n){const r=t;if(e.has(r))return e.get(r);{const i=n();return E.isPromise(i)?new Promise(async(s,o)=>{try{const a=await i;e.set(r,a),s(a)}catch(a){o(Pe(a))}}):(e.set(r,i),i)}}function Jd(e,t,n){if(t in e)return e[t];{const r=n();return E.isPromise(r)?new Promise(async(i,s)=>{try{const o=await r;e[t]=o,i(o)}catch(o){s(Pe(o))}}):(e[t]=r,r)}}function Na(e){return J(e).map(t=>[t,e[t]])}function Zo(e){return Object.fromEntries(e)}function ps(e,t,n){return e.reduce((r,i,s,o)=>{const a=t(i,s,o);return n(a,i,s,o)&&r.push(a),r},[])}function ey({min:e,max:t}){const{min:n,max:r}=gf({min:Math.floor(e),max:Math.floor(t)}),i=r-n+1,s=Math.ceil(Math.log2(i)),o=Math.ceil(s/8);if(o>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${n}, max: ${r}})`);const a=Math.floor(256**o/i)*i,u=new Uint8Array(o);let l;do crypto.getRandomValues(u),l=u.reduce((f,c,d)=>f+c*256**d,0);while(l>=a);return n+l%i}const pl=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];function Hd(e=16){let t="";for(let n=0;n<e;n++){const r=ey({min:0,max:pl.length-1});t+=pl[r]}return t}function Qd(e){if(E.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>Ce(t).trim()).join(`
`))}var gl;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(gl||(gl={}));function Xd(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const ty="modulepreload",ny=function(e){return"/element-vir/vira/"+e},wl={},eh=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");i=Promise.allSettled(n.map(u=>{if(u=ny(u),u in wl)return;wl[u]=!0;const l=u.endsWith(".css"),f=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":ty,l||(c.as="script"),c.crossOrigin="",c.href=u,a&&c.setAttribute("nonce",a),document.head.appendChild(c),l)return new Promise((d,p)=>{c.addEventListener("load",d),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};var he;(function(e){e.Standard="stdout",e.Error="stderr"})(he||(he={}));var j;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(j||(j={}));async function ry(){return await Dd({async[Mt.Node](){const e=(await eh(async()=>{const{default:t}=await import("./index-BkK8QNWG.js");return{default:t}},[])).default;return{[j.Bold]:e.bold.open,[j.Debug]:e.blueBright.open,[j.Error]:e.red.open,[j.Faint]:e.gray.open,[j.Info]:e.cyan.open,[j.Mutate]:e.magenta.open,[j.NormalWeight]:"\x1B[22m",[j.Plain]:"",[j.Reset]:e.reset.open,[j.Success]:e.green.open,[j.Warning]:e.yellow.open}},[Mt.Web](){return Promise.resolve({[j.Bold]:"font-weight: bold",[j.Debug]:"color: blue",[j.Error]:"color: red",[j.Faint]:"color: grey",[j.Info]:"color: teal",[j.Mutate]:"color: magenta",[j.NormalWeight]:"",[j.Plain]:"",[j.Reset]:"",[j.Success]:"color: green",[j.Warning]:"color: orange"})}})}const Oe=await ry(),iy={[j.Bold]:{colors:[Oe.bold],logType:he.Standard},[j.Debug]:{colors:[Oe.debug],logType:he.Standard},[j.Faint]:{colors:[Oe.faint],logType:he.Standard},[j.Info]:{colors:[Oe.info],logType:he.Standard},[j.Mutate]:{colors:[Oe.mutate,Oe.bold],logType:he.Standard},[j.NormalWeight]:{colors:[Oe.normalWeight],logType:he.Standard},[j.Plain]:{colors:[],logType:he.Standard},[j.Reset]:{colors:[Oe.reset],logType:he.Standard},[j.Success]:{colors:[Oe.success,Oe.bold],logType:he.Standard},[j.Error]:{colors:[Oe.error,Oe.bold],logType:he.Error},[j.Warning]:{colors:[Oe.warning],logType:he.Error}};function sy(e){return e.replace(/,/g,"")}function oy(e){return typeof e=="number"?e:Number(typeof e=="string"?sy(e):e)}function yl(e){const t=ay(e);if(t==null)throw new TypeError(`Cannot convert to a number: ${String(e)}`);return t}function ay(e){const t=oy(e);if(!isNaN(t))return t}const uy="px";function th(e){return ly({value:e,suffix:uy})}function ly({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function cy({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function fy(){return await Dd({async[Mt.Node](){const{inspect:e}=await eh(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:n,options:r})=>{const i=t.map(a=>typeof a=="string"?a:e(a));return{text:[r.omitColors?"":r.colorConfig[n].colors.join(""),i.join(`
`),r.omitColors?"":r.colorConfig[j.Reset].colors.join("")].join(""),css:void 0}}},[Mt.Web](){return({args:e,colorKey:t,options:n})=>{const r=n.omitColors?void 0:ps(n.colorConfig[t].colors,o=>cy({value:o,suffix:";"}),E.isTruthy).join("; ");return{text:[e.map(o=>typeof o=="string"?o:m(o)).join(`
`),n.omitColors?"":n.colorConfig[j.Reset].colors.join("")].join(""),css:r}}}})}const dy=await fy();function je({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function Un({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function hy(e,t){try{let n=!1;const r=Na(e).map(([i,s])=>{const o=t(i,s,e);return o instanceof Promise?(n=!0,o):o?[o.key,o.value]:void 0}).filter(E.isTruthy);return n?new Promise(async(i,s)=>{try{const o=ps(await Promise.all(r),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},E.isTruthy);i(Zo(o))}catch(o){s(Pe(o))}}):Zo(r)}catch(n){throw Pe(n)}}function my(e,t){return hy(e,(n,r)=>{const i=r,s=t(r,e);return s instanceof Promise?s.then(o=>({key:i,value:o})):{key:i,value:s}})}function nh(e,...t){const n={...e};return t.forEach(r=>{r&&Na(r).forEach(([i,s])=>{s!=null&&(n[i]=s)})}),n}const py={colorConfig:iy,omitColors:!1},gy=rh({[he.Error](){},[he.Standard](){}});function rh(e,t){const n=nh(py,t);function r(s){e[n.colorConfig[s.colorKey].logType](dy({...s,options:n}))}const i=my(j,s=>(...o)=>r({args:o,colorKey:s}));return{...i,if(s){return s?i:gy}}}const wy=fw(Mt.Node)?{[he.Error]({text:e}){process.stderr.write(e+`
`)},[he.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[he.Error]({text:e,css:t}){console.error(je({value:e,prefix:"%c"}),t)},[he.Standard]({text:e,css:t}){console.log(je({value:e,prefix:"%c"}),t)}};rh(wy);function yy(e,t){return e.split(t)}function wo(e,t){const{min:n,max:r}=gf(t);return e>r?n:e<n?r:e}function we(e,t){let n=!1;const r=J(e).reduce((i,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(n=!0),i[s]=o,i},{});return n?new Promise(async(i,s)=>{try{await Promise.all(J(r).map(async o=>{const a=await r[o];r[o]=a})),i(r)}catch(o){s(Pe(o))}}):r}function xa(e,t){const n=Na(e).filter(([r,i])=>t(r,i,e));return Zo(n)}function by(e,t){return xa(e,n=>!t.includes(n))}function Ey(e,t){return xa(e,n=>t.includes(n))}function ih(e){return J(e).map(t=>e[t])}function Dy(e,t){return t.capitalizeFirstLetter?vy(e):e}function vy(e){return e.length?e[0].toUpperCase()+e.slice(1):""}const Ay={capitalizeFirstLetter:!1};var Gn;(function(e){e.Upper="upper",e.Lower="lower"})(Gn||(Gn={}));function $y(e){return e.toLowerCase()!==e.toUpperCase()}function bl(e,t,n){if(!e&&n?.rejectNoCaseCharacters)return!1;for(const r of e)if($y(r)){if(t===Gn.Upper&&r!==r.toUpperCase()||t===Gn.Lower&&r!==r.toLowerCase())return!1}else{if(n?.rejectNoCaseCharacters)return!1;continue}return!0}function Cy(e,t={}){const n=e.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""});return Dy(r,nh(Ay,t))}function ky(e){return e.split("").reduce((n,r,i,s)=>{const o=i>0&&s[i-1]||"",a=i<s.length-1&&s[i+1]||"",u=bl(o,Gn.Lower,{rejectNoCaseCharacters:!0})||bl(a,Gn.Lower,{rejectNoCaseCharacters:!0});return r===r.toLowerCase()||i===0||!u?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function Sy(e,t="and"){if(e.length<2)return e.join("");const n=e.length>2?", ":" ";return`${e.slice(0,-1).join(n)}${n}${t} ${e[e.length-1]}`}function Fy(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}function sh(){function e(t){return class extends CustomEvent{static type=t;constructor(r){super(t,r)}}}return e}function oh(e){return class extends Event{static type=e;constructor(n){super(e,n)}}}function gs(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Ty(e){return gs(e).filter(t=>isNaN(Number(t)))}function ah(e){return Ty(e).map(n=>e[n])}function P(e){try{return pf.stringify(e)}catch{return String(e)}}const My=[".",":",";",",","?","!"],Ny=new RegExp(`[${My.join("")}]+$`);function El(e){return e.replace(Ny,"")}function Kn(e){return e?e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):typeof e=="string"?e:P(e):""}function Ba(...e){const t=(Array.isArray(e[0])?e[0]:e).filter(r=>r&&El(r));return t.length===1?t[0]:t.length?t.map((r,i)=>i===t.length-1?r:El(r)).join(": "):""}function Ft(e){return e instanceof Error?e:new Error(Kn(e))}function uh(e,t){const n=Ft(e);return n.message=Ba(t,n.message),n}var x;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(x||(x={}));var fn;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(fn||(fn={}));const xy={[fn.Information]:[x.Continue,x.SwitchingProtocols,x.Processing,x.EarlyHints],[fn.Success]:[x.Ok,x.Created,x.Accepted,x.NonAuthoritativeInformation,x.NoContent,x.ResetContent,x.PartialContent,x.MultiStatus,x.AlreadyReported,x.ImUsed],[fn.Redirect]:[x.MultipleChoices,x.MovedPermanently,x.Found,x.SeeOther,x.NotModified,x.UseProxy,x.Unused,x.TemporaryRedirect,x.PermanentRedirect],[fn.ClientError]:[x.BadRequest,x.Unauthorized,x.PaymentRequired,x.Forbidden,x.NotFound,x.MethodNotAllowed,x.NotAcceptable,x.ProxyAuthenticationRequired,x.RequestTimeout,x.Conflict,x.Gone,x.LengthRequired,x.PreconditionFailed,x.PayloadTooLarge,x.UriTooLong,x.UnsupportedMediaType,x.RangeNotSatisfiable,x.ExpectationFailed,x.ImATeapot,x.MisdirectedRequest,x.UnprocessableContent,x.Locked,x.FailedDependency,x.TooEarly,x.UpgradeRequired,x.PreconditionRequired,x.TooManyRequests,x.RequestHeaderFieldsTooLarge,x.UnavailableForLegalReasons],[fn.ServerError]:[x.InternalServerError,x.NotImplemented,x.BadGateway,x.ServiceUnavailable,x.GatewayTimeout,x.HttpVersionNotSupported,x.VariantAlsoNegotiates,x.InsufficientStorage,x.LoopDetected,x.NotExtended,x.NetworkAuthenticationRequired]};class By{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,n)=>{this.resolve=r=>(this.isSettled=!0,t(r)),this.reject=r=>{this.isSettled=!0,n(Ft(r))}})}}function lh(e){const t=new By,n=lt(e,{milliseconds:!0}).milliseconds;return n!==1/0&&setTimeout(()=>{t.resolve()},n<=0?0:n),t.promise}var ji;(function(e){e.Node="node",e.Web="web"})(ji||(ji={}));function Py(){return bd?ji.Node:ji.Web}Py();class k extends Error{name="AssertionError";constructor(t,n){super(Ba(n,t)||"Assertion failed.")}}const w=Symbol("auto guard");function g(){return w}function ws(e,t,n){return t in e&&e[t]!==w?e[t]:n()}function Ly(e,t){wt(e,"array",t)}function Iy(e,t){wt(e,"bigint",t)}function Ry(e,t){wt(e,"boolean",t)}function Oy(e,t){wt(e,"function",t)}function _y(e,t){wt(e,"number",t)}function Vy(e,t){wt(e,"object",t)}function Uy(e,t){wt(e,"string",t)}function Wy(e,t){wt(e,"symbol",t)}function qy(e,t){wt(e,"undefined",t)}function jy(e,t){wt(e,"null",t)}function zy(e,t){gt(e,"array",t)}function Gy(e,t){gt(e,"bigint",t)}function Ky(e,t){gt(e,"boolean",t)}function Zy(e,t){gt(e,"function",t)}function ch(e,t){if(gt(e,"number",t),isNaN(e))throw new k("Value is NaN.",t)}function Yy(e,t){gt(e,"object",t)}function Jy(e,t){gt(e,"string",t)}function Hy(e,t){gt(e,"symbol",t)}function Qy(e,t){gt(e,"undefined",t)}function Xy(e,t){gt(e,"null",t)}const e1={isArray:zy,isBigInt:Gy,isBoolean:Ky,isFunction:Zy,isNull:Xy,isNumber:ch,isObject:Yy,isString:Jy,isSymbol:Hy,isUndefined:Qy,isNotArray:Ly,isNotBigInt:Iy,isNotBoolean:Ry,isNotFunction:Oy,isNotNull:jy,isNotNumber:_y,isNotObject:Vy,isNotString:Uy,isNotSymbol:Wy,isNotUndefined:qy},fh={assert:e1,check:{isArray:g(),isBigInt:w,isBoolean:w,isFunction:g(),isNull:w,isNumber:w,isObject:w,isString:w,isSymbol:w,isUndefined:w,isNotArray:g(),isNotBigInt:g(),isNotBoolean:g(),isNotFunction:g(),isNotNull:g(),isNotNumber:g(),isNotObject:g(),isNotString:g(),isNotSymbol:g(),isNotUndefined:g()},assertWrap:{isArray:g(),isBigInt:w,isBoolean:w,isFunction:g(),isNull:w,isNumber:w,isObject:w,isString:w,isSymbol:g(),isUndefined:w,isNotArray:g(),isNotBigInt:g(),isNotBoolean:g(),isNotFunction:g(),isNotNull:g(),isNotNumber:g(),isNotObject:g(),isNotString:g(),isNotSymbol:g(),isNotUndefined:g()},checkWrap:{isArray:g(),isBigInt:w,isBoolean:w,isFunction:g(),isNull:w,isNumber:w,isObject:w,isString:w,isSymbol:w,isUndefined:void 0,isNotArray:g(),isNotBigInt:g(),isNotBoolean:g(),isNotFunction:g(),isNotNull:g(),isNotNumber:g(),isNotObject:g(),isNotString:g(),isNotSymbol:g(),isNotUndefined:void 0},waitUntil:{isArray:g(),isBigInt:w,isBoolean:w,isFunction:g(),isNull:w,isNumber:w,isObject:w,isString:w,isSymbol:w,isUndefined:w,isNotArray:g(),isNotBigInt:g(),isNotBoolean:g(),isNotFunction:g(),isNotNull:g(),isNotNumber:g(),isNotObject:g(),isNotString:g(),isNotSymbol:g(),isNotUndefined:g()}};var zi;(function(e){e.String="string",e.Number="number",e.Bigint="bigint",e.Boolean="boolean",e.Symbol="symbol",e.Undefined="undefined",e.Object="object",e.Function="function",e.Array="array",e.Null="null"})(zi||(zi={}));function dh(e){return e===null?zi.Null:Array.isArray(e)?zi.Array:typeof e}function gt(e,t,n){const r=dh(e);if(r!==t)throw new k(`'${P(e)}' is '${r}', not '${t}'.`,n)}function wt(e,t,n){const r=dh(e);if(r===t)throw new k(`'${P(e)}' is '${r}'.`,n)}function t1(e,t){if(e)throw new k(`'${P(e)}' is not truthy.`,t)}function n1(e,t){if(!e)throw new k(`'${P(e)}' is not truthy.`,t)}function r1(e,t){if(e!==!0)throw new k(`'${P(e)}' is not true.`,t)}function i1(e,t){if(e!==!1)throw new k(`'${P(e)}' is not false.`,t)}const s1={isFalse:i1,isFalsy:t1,isTrue:r1,isTruthy:n1},hh={assert:s1,check:{isFalse:w,isFalsy:w,isTrue:w,isTruthy:g()},assertWrap:{isFalse:w,isFalsy:g(),isTrue:w,isTruthy:g()},checkWrap:{isFalse:w,isFalsy:g(),isTrue:w,isTruthy:g()},waitUntil:{isFalse:w,isFalsy:g(),isTrue:w,isTruthy:g()}};function o1(e,t,n){const r=`${P(e)} does not end with ${P(t)}}`;if(typeof e=="string"){if(!e.endsWith(t))throw new k(r,n)}else if(e[e.length-1]!==t)throw new k(r,n)}function a1(e,t,n){const r=`${P(e)} ends with ${P(t)}}`;if(typeof e=="string"){if(e.endsWith(t))throw new k(r,n)}else if(e[e.length-1]===t)throw new k(r,n)}function u1(e,t,n){const r=`${P(e)} does not start with ${P(t)}}`;if(typeof e=="string"){if(!e.startsWith(t))throw new k(r,n)}else if(e[0]!==t)throw new k(r,n)}function l1(e,t,n){const r=`${P(e)} starts with ${P(t)}}`;if(typeof e=="string"){if(e.startsWith(t))throw new k(r,n)}else if(e[0]===t)throw new k(r,n)}const c1={endsWith:o1,endsWithout:a1,startsWith:u1,startsWithout:l1},mh={assert:c1,check:{endsWith:g(),endsWithout:g(),startsWith:g(),startsWithout:g()},assertWrap:{endsWith:g(),endsWithout:g(),startsWith:g(),startsWithout:g()},checkWrap:{endsWith:g(),endsWithout:g(),startsWith:g(),startsWithout:g()},waitUntil:{endsWith:g(),endsWithout:g(),startsWith:g(),startsWithout:g()}};function ys(e,t,n){const r=ah(t);if(!r.includes(e))throw new k(`${String(e)} is not an enum value in '${r.join(",")}'.`,n)}function f1(e,t,n){try{ys(e,t)}catch{return}const r=ah(t);throw new k(`${String(e)} is an enum value in '${r.join(",")}'`,n)}const d1={isEnumValue:ys,isNotEnumValue:f1},ph={assert:d1,check:{isEnumValue:g(),isNotEnumValue:g()},assertWrap:{isEnumValue:g(),isNotEnumValue:g()},checkWrap:{isEnumValue:g(),isNotEnumValue:g()},waitUntil:{isEnumValue:g(),isNotEnumValue:g()}};function gh(e,t,n){if(e!==t)throw new k(`

${P(e)}

does not strictly equal

${P(t)}

`,n)}function h1(e,t,n){if(e===t)throw new k(`

${P(e)}

strictly equals

${P(t)}

`,n)}function m1(e,t,n){if(e!=t)throw new k(`

${P(e)}

does not loosely equal

${P(t)}

`,n)}function p1(e,t,n){if(e==t)throw new k(`

${P(e)}

loosely equals

${P(t)}

`,n)}function Pa(e,t,n){if(!Ve(e,t))throw new k(`

${P(e)}

does not deeply equal

${P(t)}

`,n)}function g1(e,t,n){if(Ve(e,t))throw new k(`

${P(e)}

deeply equals

${P(t)}

`,n)}const w1={strictEquals:gh,notStrictEquals:h1,looseEquals:m1,notLooseEquals:p1,deepEquals:Pa,notDeepEquals:g1},wh={assert:w1,check:{strictEquals:g(),notStrictEquals:w,looseEquals:w,notLooseEquals:w,deepEquals:g(),notDeepEquals:w},assertWrap:{strictEquals:g(),notStrictEquals:w,looseEquals:w,notLooseEquals:w,deepEquals:g(),notDeepEquals:w},checkWrap:{strictEquals:g(),notStrictEquals:w,looseEquals:w,notLooseEquals:w,deepEquals:g(),notDeepEquals:w},waitUntil:{strictEquals:g(),notStrictEquals:w,looseEquals:w,notLooseEquals:w,deepEquals:g(),notDeepEquals:w}};function yh(e,t,n){if(!e||typeof e!="object")throw new k(`${P(e)} is not an object.`,n);if(!t||typeof t!="object")throw new k(`${P(t)} is not an object.`,n);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const s=e[i],o=t[i];try{gh(s,o)}catch{throw new k(`Entries are not equal at key '${String(i)}'.`,n)}})}function y1(e,t,n){try{yh(e,t)}catch{return}throw new k("Entries are equal.",n)}const b1={entriesEqual:yh,notEntriesEqual:y1},bh={assert:b1,check:{entriesEqual:g(),notEntriesEqual:w},assertWrap:{entriesEqual:g(),notEntriesEqual:w},checkWrap:{entriesEqual:g(),notEntriesEqual:w},waitUntil:{entriesEqual:g(),notEntriesEqual:w}};function Dl(e,t){return JSON.stringify(e)===JSON.stringify(t)}function La(e,t,n){try{D1(e,t)}catch(r){throw new k(Kn(r),n)}}function E1(e,t,n){try{La(e,t)}catch{return}throw new k("Values are JSON equal.",n)}function D1(e,t){const n=Dl(e,t);if(!(e===t||n)){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),i=Object.keys(t).sort();if(r.length||i.length){if(!Dl(r,i))throw new Error("Values are JSON equal.");Object.keys(e).forEach(o=>{try{La(e[o],t[o])}catch(a){throw new Error(`JSON objects are not equal at key '${o}': ${Kn(a)}`)}})}}throw new Error("Values are not JSON equal.")}}const v1={jsonEquals:La,notJsonEquals:E1},Eh={assert:v1,check:{jsonEquals:g(),notJsonEquals:w},assertWrap:{jsonEquals:g(),notJsonEquals:w},checkWrap:{jsonEquals:g(),notJsonEquals:w},waitUntil:{jsonEquals:g(),notJsonEquals:w}};function bs(e,t,n){try{if(!Reflect.ownKeys(e).map(i=>e[i]).includes(t))throw new Error("fail")}catch{throw new k(`'${P(e)}' does not have value '${P(t)}'.`,n)}}function Dh(e,t,n){try{bs(e,t)}catch{return}throw new k(`'${P(e)}' has value '${P(t)}'.`,n)}function A1(e,t,n){t.forEach(r=>bs(e,r,n))}function $1(e,t,n){t.forEach(r=>Dh(e,r,n))}function Ia(e,t,n){if(typeof t=="string"){if(!t.includes(e))throw new k(`${P(e)} is not in '${t}'.`,n)}else bs(t,e,n)}function C1(e,t,n){try{Ia(e,t)}catch{return}throw new k(`${P(e)} is not in ${P(t)}.`,n)}function vh(e,t){const n=e;if(n){if(typeof n!="string"&&typeof n!="object")throw new TypeError(`Cannot check if '${P(n)}' is empty.`);if(typeof n=="string"&&n||Array.isArray(n)&&n.length||n instanceof Map&&n.size||n instanceof Set&&n.size||n&&typeof n=="object"&&Object.keys(n).length)throw new k(`'${P(e)}' is not empty.`,t)}else return}function k1(e,t){try{vh(e)}catch{return}throw new k(`'${P(e)}' is empty.`,t)}const S1={hasValue:bs,lacksValue:Dh,hasValues:A1,lacksValues:$1,isIn:Ia,isNotIn:C1,isEmpty:vh,isNotEmpty:k1},Ah={assert:S1,check:{hasValue:w,lacksValue:w,hasValues:w,lacksValues:w,isIn:g(),isNotIn:g(),isEmpty:g(),isNotEmpty:g()},assertWrap:{hasValue:w,lacksValue:w,hasValues:w,lacksValues:w,isIn:g(),isNotIn:g(),isEmpty:g(),isNotEmpty:g()},checkWrap:{hasValue:w,lacksValue:w,hasValues:w,lacksValues:w,isIn:g(),isNotIn:g(),isEmpty:g(),isNotEmpty:g()},waitUntil:{hasValue:w,lacksValue:w,hasValues:w,lacksValues:w,isIn:g(),isNotIn:g(),isEmpty:g(),isNotEmpty:g()}};function F1(e,t){try{ys(e,x)}catch{throw new k(`${P(e)} is not a valid http status.`,t)}}function T1(e,t,n){try{ys(e,x),Ia(e,xy[t])}catch{throw new k(`${P(e)} is not a '${t}' http status.`,n)}}const M1={isHttpStatus:F1,isHttpStatusCategory:T1},$h={assert:M1,check:{isHttpStatus:w,isHttpStatusCategory:g()},assertWrap:{isHttpStatus:w,isHttpStatusCategory:g()},checkWrap:{isHttpStatus:w,isHttpStatusCategory:g()},waitUntil:{isHttpStatus:w,isHttpStatusCategory:g()}};function N1(e,t,n){if(!(e instanceof t))throw new k(`'${P(e)}' is not an instance of '${t.name}'`,n)}function x1(e,t,n){if(e instanceof t)throw new k(`'${P(e)}' is an instance of '${t.name}'`,n)}const B1={instanceOf:N1,notInstanceOf:x1},Ch={assert:B1,check:{instanceOf:g(),notInstanceOf:g()},assertWrap:{instanceOf:g(),notInstanceOf:g()},checkWrap:{instanceOf:g(),notInstanceOf:g()},waitUntil:{instanceOf:g(),notInstanceOf:g()}};function P1(e,t){return Object.entries(e).reduce((r,[i,s])=>(r[i]=ws(t,i,()=>kh(s)),r),{})}function kh(e){return(...t)=>L1(e,...t)}function L1(e,t,...n){try{return e(t,...n),!0}catch{return!1}}function Sh(e,t,n){try{Es(t,e)}catch{throw new k(`'${String(e)}' is not a key of '${P(t)}'.`,n)}}function I1(e,t,n){try{Sh(e,t)}catch{return}throw new k(`'${String(e)}' is a key of '${P(t)}'.`,n)}const R1=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Es(e,t,n){const r=`'${P(e)}' does not have key '${String(t)}'.`;if(!R1.some(s=>{try{return s(e,t)}catch{return!1}}))throw new k(r,n)}function O1(e,t,n){try{Es(e,t)}catch{return}throw new k(`'${P(e)}' has key '${String(t)}'.`,n)}const Fh=kh(Es);function _1(e,t,n){const r=t.filter(i=>!Fh(e,i));if(r.length)throw new k(`'${P(e)}' does not have keys '${r.join(",")}'.`,n)}function V1(e,t,n){const r=t.filter(i=>Fh(e,i));if(r.length)throw new k(`'${P(e)}' does not lack keys '${r.join(",")}'.`,n)}const U1={isKeyOf:Sh,isNotKeyOf:I1,hasKey:Es,lacksKey:O1,hasKeys:_1,lacksKeys:V1},Th={assert:U1,check:{isKeyOf:g(),isNotKeyOf:g(),hasKey:g(),lacksKey:g(),hasKeys:g(),lacksKeys:g()},assertWrap:{isKeyOf:g(),isNotKeyOf:g(),hasKey:g(),lacksKey:g(),hasKeys:g(),lacksKeys:g()},checkWrap:{isKeyOf:g(),isNotKeyOf:g(),hasKey:g(),lacksKey:g(),hasKeys:g(),lacksKeys:g()},waitUntil:{isKeyOf:g(),isNotKeyOf:g(),hasKey:g(),lacksKey:g(),hasKeys:g(),lacksKeys:g()}};function W1(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:gs(e).length)<t)throw new k(`Length '${e.length}' is not at least '${t}'.`,n)}function q1(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:gs(e).length)!==t)throw new k(`Length '${e.length}' is not exactly '${t}'.`,n)}const j1={isLengthAtLeast:W1,isLengthExactly:q1},Mh={assert:j1,check:{isLengthAtLeast:g(),isLengthExactly:g()},assertWrap:{isLengthAtLeast:g(),isLengthExactly:g()},checkWrap:{isLengthAtLeast:g(),isLengthExactly:g()},waitUntil:{isLengthAtLeast:g(),isLengthExactly:g()}};function z1(e,t){if(e==null)throw new k(`'${P(e)}' is not defined.`,t)}function G1(e,t){if(e!=null)throw new k(`'${P(e)}' is not a nullish.`,t)}const K1={isDefined:z1,isNullish:G1},Nh={assert:K1,check:{isDefined:g(),isNullish:w},assertWrap:{isDefined:g(),isNullish:w},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:g(),isNullish:w}};function Z1(e,t,n){if(e<=t)throw new k(`${e} is not above ${t}`,n)}function Y1(e,t,n){if(e<t)throw new k(`${e} is not at least ${t}`,n)}function J1(e,{max:t,min:n},r){if(e<n||t<e)throw new k(`${e} is not within the bounds ${P({min:n,max:t})}`,r)}function H1(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new k(`${e} is not outside the bounds ${P({min:t,max:n})}`,r)}function Q1(e,t){if(ch(e),!Number.isInteger(e))throw new k(`${e} is not an integer.`,t)}function X1(e,t){if(Number.isInteger(e))throw new k(`${e} is an integer.`,t)}function e2(e,t,n){if(e>=t)throw new k(`${e} is not below ${t}`,n)}function t2(e,t,n){if(e>t)throw new k(`${e} is not at most ${t}`,n)}function n2(e,t){if(!isNaN(e))throw new k(`${e} is not NaN`,t)}function r2(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new k(`${e} is not finite`,t)}function i2(e,t){if(e!==1/0&&e!==-1/0)throw new k(`${e} is not infinite`,t)}function s2(e,t,n,r){if(e<t-n||e>t+n)throw new k(`${e} is not within ±${n} of ${t}`,r)}function o2(e,t,n,r){if(e>=t-n&&e<=t+n)throw new k(`${e} is within ±${n} of ${t}`,r)}const a2={isInBounds:J1,isOutBounds:H1,isInteger:Q1,isNotInteger:X1,isAbove:Z1,isAtLeast:Y1,isBelow:e2,isAtMost:t2,isNaN:n2,isFinite:r2,isInfinite:i2,isApproximately:s2,isNotApproximately:o2},xh={assert:a2,check:{isInBounds:w,isOutBounds:w,isInteger:w,isNotInteger:w,isAbove:w,isAtLeast:w,isBelow:w,isAtMost:w,isNaN:w,isFinite:w,isInfinite:w,isApproximately:w,isNotApproximately:w},assertWrap:{isInBounds:w,isOutBounds:w,isInteger:w,isNotInteger:w,isAbove:w,isAtLeast:w,isBelow:w,isAtMost:w,isNaN:w,isFinite:w,isInfinite:w,isApproximately:w,isNotApproximately:w},checkWrap:{isInBounds:w,isOutBounds:w,isInteger:w,isNotInteger:w,isAbove:w,isAtLeast:w,isBelow:w,isAtMost:w,isNaN:w,isFinite:w,isInfinite:w,isApproximately:w,isNotApproximately:w},waitUntil:{isInBounds:w,isOutBounds:w,isInteger:w,isNotInteger:w,isAbove:w,isAtLeast:w,isBelow:w,isAtMost:w,isNaN:w,isFinite:w,isInfinite:w,isApproximately:w,isNotApproximately:w}},vl={interval:{milliseconds:100},timeout:{seconds:10}},yo=Symbol("not set");async function Bh(e,t,n){const{callback:r,extraAssertionArgs:i,failureMessage:s,options:o}=l2(t),a=lt(o.timeout,{milliseconds:!0}).milliseconds,u=lt(o.interval,{milliseconds:!0});let l=yo,f;async function c(){try{l=n?r():await r(),e(l,...i)}catch(p){l=yo,f=Ft(p)}}const d=Date.now();for(;l===yo;)if(await c(),await lh(u),Date.now()-d>=a){const y=`${s?`${s}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw uh(f,y)}return l}function u2(e,t){return Object.entries(e).reduce((r,[i,s])=>(r[i]=ws(t,i,()=>Rn(s)),r),{})}function Rn(e,t=!1){return(...n)=>Bh(e,n,t)}function l2(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(n=>{if(t.callback)t.extraAssertionArgs.push(n);else if(typeof n=="function")t.callback=n;else if(typeof n=="string")t.failureMessage=n;else if(typeof n=="object")t.options=n;else{if(n===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(n)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:Ph(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function Ph(e){return{interval:e?.interval||vl.interval,timeout:e?.timeout||vl.timeout}}function c2(e,t,n,r,i){return Qr(...Ds(e,t,n,r,i),!1)}function Ds(e,t,n,r,i){const s=Array.isArray(n);return[s?e:Pa,s?t:e,s?n:t,s?r:n,s?i:r]}function Qr(e,t,n,r,i,s){const o=t(...n);if(o instanceof Promise)return new Promise(async(a,u)=>{try{const l=await o;e(l,r),s?a(l):a()}catch(l){u(new k(`Output from '${t.name}' did not produce expected output with input: ${P(n)}: ${Kn(l)}`,i))}});try{return e(o,r),s?o:void 0}catch(a){throw new k(`Output from '${t.name}' did not produce expected output with input: ${P(n)}: ${Kn(a)}`,i)}}function f2(e,t,n,r,i){try{const s=Qr(...Ds(e,t,n,r,i),!1);return s instanceof Promise?new Promise(async o=>{try{await s,o(!0)}catch{o(!1)}}):!0}catch{return!1}}function d2(e,t,n,r,i){return Qr(...Ds(e,t,n,r,i),!0)}function h2(e,t,n,r,i){try{const s=Qr(...Ds(e,t,n,r,i),!0);return s instanceof Promise?new Promise(async o=>{try{o(await s)}catch{o(void 0)}}):s}catch{return}}const bo=Symbol("not set");async function m2(e,t,n,r,i,s){const o=Array.isArray(n),a=o?e:Pa,u=o?t:e,l=o?n:t,f=o?r:n,c=Ph(o?i:r),d=o?s:i,p=lt(c.timeout,{milliseconds:!0}).milliseconds,y=lt(c.interval,{milliseconds:!0});let D=bo,$;async function A(){try{D=await Qr(a,u,l,f,void 0,!0)}catch(I){D=bo,$=Ft(I)}}const F=Date.now();for(;D===bo;)if(await A(),await lh(y),Date.now()-F>=p)throw uh($,Ba(d,`Timeout of '${p}' milliseconds exceeded waiting for callback value to match expectations`));return D}const p2={output:c2},Lh={assert:p2,check:{output:f2},assertWrap:{output:d2},checkWrap:{output:h2},waitUntil:{output:m2}};function Ih(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new k(`'${P(e)}' is not a Primitive.`,t)}function g2(e,t){try{Ih(e)}catch{return}throw new k(`'${P(e)}' is a Primitive.`,t)}function Rh(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new k(`'${P(e)}' is not a PropertyKey.`,t)}function w2(e,t){try{Rh(e)}catch{return}throw new k(`'${P(e)}' is a PropertyKey.`,t)}const y2={isPropertyKey:Rh,isNotPropertyKey:w2,isPrimitive:Ih,isNotPrimitive:g2},Oh={assert:y2,check:{isNotPrimitive:g(),isNotPropertyKey:g(),isPrimitive:w,isPropertyKey:w},assertWrap:{isNotPrimitive:g(),isNotPropertyKey:g(),isPrimitive:w,isPropertyKey:w},checkWrap:{isNotPrimitive:g(),isNotPropertyKey:g(),isPrimitive:w,isPropertyKey:w},waitUntil:{isNotPrimitive:g(),isNotPropertyKey:g(),isPrimitive:w,isPropertyKey:w}};function Ra(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new k(`'${P(e)}' is not a PromiseLike.`,t)}function _h(e,t){try{Ra(e)}catch{return}throw new k(`'${P(e)}' is a PromiseLike.`,t)}function Vh(e,t){if(!(e instanceof Promise))throw new k(`'${P(e)}' is not a Promise.`,t)}function Uh(e,t){if(e instanceof Promise)throw new k(`'${P(e)}' is a Promise.`,t)}const b2={isPromiseLike:Ra,isNotPromiseLike:_h,isPromise:Vh,isNotPromise:Uh},Wh={assert:b2,check:{isPromiseLike:w,isNotPromiseLike:g(),isPromise:w,isNotPromise:g()},assertWrap:{isPromiseLike:g(),isNotPromiseLike:g(),isPromise:g(),isNotPromise:g()},checkWrap:{isNotPromise:g(),isNotPromiseLike:g(),isPromise:w,isPromiseLike:w},waitUntil:{isPromiseLike:Rn(Ra,!0),isNotPromiseLike:Rn(_h,!0),isPromise:Rn(Vh,!0),isNotPromise:Rn(Uh,!0)}};function E2(e,t,n){if(!t.test(e))throw new k(`'${e}' does not match ${t}`,n)}function D2(e,t,n){if(t.test(e))throw new k(`'${e}' matches ${t}`,n)}const v2={matches:E2,mismatches:D2},qh={assert:v2,check:{matches:w,mismatches:w},assertWrap:{matches:w,mismatches:w},checkWrap:{matches:w,mismatches:w},waitUntil:{matches:w,mismatches:w}};var Ne;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(Ne||(Ne={}));function jh(e,t,n){zh(e,{noError:"No error.",notInstance:`'${P(e)}' is not an error instance.`},t,n)}function Al(e,t,n){zh(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${P(e)}' is not an error instance.`},t,n)}function zh(e,t,n,r){if(e)if(e instanceof Error){if(n?.matchConstructor&&!(e instanceof n.matchConstructor)){const i=e.constructor.name;throw new k(`Error constructor '${i}' did not match expected constructor '${n.matchConstructor.name}'.`,r)}else if(n?.matchMessage){const i=Kn(e);if(typeof n.matchMessage=="string"){if(!i.includes(n.matchMessage))throw new k(`Error message

'${i}'

does not contain

'${n.matchMessage}'.`,r)}else if(!i.match(n.matchMessage))throw new k(`Error message

'${i}'

does not match RegExp

'${n.matchMessage}'.`,r)}}else throw new k(t.notInstance,r);else throw new k(t.noError,r)}function vs(e,t,n,r){let i;try{const s=t instanceof Promise?t:t();if(s instanceof Promise)return new Promise(async(o,a)=>{try{await s}catch(u){i=Ft(u)}try{Al(i,n,r),e===Ne.Assert?o():e===Ne.Check?o(!0):o(i)}catch(u){e===Ne.CheckWrap?o(void 0):e===Ne.Check?o(!1):a(Ft(u))}})}catch(s){i=Ft(s)}try{return Al(i,n,r),e===Ne.Check?!0:e!==Ne.Assert?i:void 0}catch(s){if(e===Ne.CheckWrap)return;if(e===Ne.Check)return!1;throw s}}function A2(e,t,n){return vs(Ne.Assert,e,t,n)}function $2(e,t){return vs(Ne.Check,e,t)}function C2(e,t,n){return vs(Ne.AssertWrap,e,t,n)}function k2(e,t,n){return vs(Ne.CheckWrap,e,t,n)}const S2=Rn(jh);function F2(e,t,n,r){const i=typeof e=="function"||e instanceof Promise?void 0:e,s=i?t:e,o=typeof n=="object"?r:n,a=typeof n=="object"?n:t;if(typeof s!="function")throw new TypeError(`Callback is not a function, got '${P(s)}'`);return S2(i,async()=>{try{await s();return}catch(u){return Ft(u)}},a,o)}const T2={throws:A2,isError:jh},Gh={assert:T2,check:{throws:$2,isError:w},assertWrap:{throws:C2,isError:w},checkWrap:{throws:k2,isError:w},waitUntil:{throws:F2,isError:w}},Kh=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;function M2(e,t){if(!String(e).match(Kh))throw new k(`'${String(e)}' is not a UUID.`,t)}function N2(e,t){if(String(e).match(Kh))throw new k(`'${String(e)}' is a UUID.`,t)}const x2={isUuid:M2,isNotUuid:N2},Zh={assert:x2,check:{isUuid:w,isNotUuid:g()},assertWrap:{isUuid:w,isNotUuid:g()},checkWrap:{isUuid:w,isNotUuid:g()},waitUntil:{isUuid:w,isNotUuid:g()}},Xr={...hh.assert,...mh.assert,...bh.assert,...ph.assert,...Ch.assert,...Eh.assert,...Th.assert,...Mh.assert,...Nh.assert,...xh.assert,...Oh.assert,...Wh.assert,...qh.assert,...fh.assert,...wh.assert,...Gh.assert,...Zh.assert,...Ah.assert,...$h.assert,...Lh.assert},As=[hh,mh,bh,ph,Ch,Eh,Th,Mh,Nh,xh,Oh,Wh,qh,fh,wh,Gh,Zh,Ah,$h,Lh],B2=Object.assign({},...As.map(e=>e.check)),P2=Object.assign({},...As.map(e=>e.assertWrap)),L2=Object.assign({},...As.map(e=>e.checkWrap)),I2=Object.assign({},...As.map(e=>e.waitUntil)),R2=P1(Xr,B2),Yo=Object.assign(function(t){return!!t},R2);function O2(e,t){return Object.entries(e).reduce((r,[i,s])=>(r[i]=ws(t,i,()=>_2(s)),r),{})}function _2(e){return(...t)=>(e(...t),t[0])}const V2=O2(Xr,P2);Object.assign(function(t,n){if(!t)throw new k("Assertion failed.",n);return t},V2);function U2(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const W2={tsType:U2},q2={assert:W2},j2={fail:e=>{throw new k("Failure triggered.",e)}},z2={...q2.assert,...Xr,...j2};Object.assign(function(t,n){if(!t)throw new k("Assertion failed.",n)},z2);function G2(e,t){return Object.entries(e).reduce((r,[i,s])=>(r[i]=ws(t,i,()=>K2(s)),r),{})}function K2(e){return(...t)=>{try{return e(...t),t[0]}catch{return}}}const Z2=G2(Xr,L2);Object.assign(function(t){if(t)return t},Z2);const Y2=u2(Xr,I2);Object.assign(function(t,n){return Bh((r,i)=>{if(!r)throw new k("Assertion failed.",i)},[t,n],!1)},Y2);function J2(e,t,n){if(t in e)return e[t];{const r=n();return Yo.isPromise(r)?new Promise(async(i,s)=>{try{const o=await r;e[t]=o,i(o)}catch(o){s(Ft(o))}}):(e[t]=r,r)}}function $l(e){return gs(e).map(t=>e[t])}class H2{listeners={};getListenerCount(){return $l(this.listeners).map(n=>n.size||0).reduce((n,r)=>n+r,0)}listen(t,n,r={}){const i=this.listeners,s=Yo.isString(t)?t:t.type;function o(){return i[s]?.delete(n)||!1}function a(u,l){r.once&&o(),n(u,l)}return J2(i,s,()=>new Map).set(n,{listener:a,removeListener:o}),o}removeListener(t,n){const r=Yo.isString(t)?t:t.type,i=this.listeners[r];if(!i)return!1;const s=i.get(n);return s?s.removeListener():!1}dispatch(t){const n=this.listeners[t.type],r=n?.size||0;return n?.forEach(i=>{i.listener(t,i.removeListener)}),r}removeAllListeners(){const n=$l(this.listeners).reduce((r,i)=>{const s=i.size||0;return i.clear(),r+s},0);return this.listeners={},n}destroy(){this.removeAllListeners()}}class Yh extends H2{}function Jh(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function Cl(e,t,n){return Jh(globalThis,e,t,n)}function Oa(e,t){return Gi(e.title),e.parent?[...Oa(e.parent),Gi(e.parent.title)].concat([]):[]}function Gi(e){return Fy(e).toLowerCase().replaceAll(/\s/g,"-")}function Q2({searchFor:e,searchIn:t}){return e.every((n,r)=>t[r]===n)}const X2={[De.ElementExample]:()=>[],[De.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...Qw(e.controls,e.title)].filter(E.isTruthy),[De.Root]:()=>[]},Ki="_isBookTreeNode",Hh=new Map;function eb(e){return Hh.get(e)}function tb(e,t){Xw(Hh,e,()=>t)}function Wn(e,t){return!!(Qh(e)&&e.entry.entryType===t)}function Qh(e){return!!(E.hasKeys(e,[Ki,"entry"])&&e[Ki])}function nb(){return{[Ki]:!0,entry:{entryType:De.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function rb({entries:e,debug:t}){const n=eb(e);if(n)return n;const r=nb();e.forEach(o=>_a({tree:r,newEntry:o,debug:t,manuallyAdded:!0}));const i=Xh(r),s={tree:r,flattenedNodes:i};return tb(e,s),t&&console.info("element-book tree:",r),s}function ib(e,t,n){if(!t.parent)return e;const r=Jo(t,e);if(r)return r;n&&console.info(`parent of ${t.title} not found in tree; adding it now.`),_a({tree:e,newEntry:t.parent,debug:n,manuallyAdded:!1});const i=Jo(t,e);if(!i)throw new Error(`Failed to find node despite having just added it: ${Oa(t).join(" > ")}`);return i}function _a({tree:e,newEntry:t,debug:n,manuallyAdded:r}){const i=X2[t.entryType](t);t.errors.push(...i);const s=ib(e,t,n),o=Gi(t.title),a=s.children[o];if(a){if(r){if(a.manuallyAdded){a.entry.errors.push(new Error(`Cannot create duplicate '${o}'${s.urlBreadcrumb?` in parent '${s.urlBreadcrumb}'.`:""}`));return}a.manuallyAdded=!0}return}const u={[Ki]:!0,children:{},urlBreadcrumb:o,fullUrlBreadcrumbs:[...s.fullUrlBreadcrumbs,o],entry:t,manuallyAdded:r};s.children[o]=u,Jw(t,De.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(l=>_a({tree:e,newEntry:l,debug:n,manuallyAdded:r}))}function Jo(e,t){const n=Qh(e)?e.fullUrlBreadcrumbs.slice(0,-1):Oa(e);return n.length?n.reduce((i,s)=>{if(i)return i.children[s]},t):void 0}function Xh(e){const n=!!e.entry.errors.length?[]:Object.values(e.children).map(i=>Xh(i));return[e,...n].flat()}function Va(e,t){return Ua(e,["",...t],void 0)}function Ua(e,t,n){const r=t.slice(1),i=r[0];!i&&n&&(e.controls=n);const s=e.children[i||""],o=s&&Ua(s,r,n);return{...e.controls,...o}}function sb(e,t,n){const r={...e};return Ua(r,["",...t],n),r}function e0(e,t){const n=t?.controls||(Wn(e,De.Page)?we(e.entry.controls,(i,s)=>s.initValue):{});return{children:we(e.children,(i,s)=>e0(s,t?.children?.[s.urlBreadcrumb])),controls:n}}function ft(e){const t={...e,entryType:De.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},n=new Set;return e.defineExamples&&e.defineExamples({defineExample(r){const i={...r,entryType:De.ElementExample,parent:t,descriptionParagraphs:r.descriptionParagraphs??[],errors:[n.has(r.title)&&new Error(`Example title '${r.title}' in page '${e.title}' is already taken.`)].filter(E.isTruthy)};n.add(r.title),t.elementExamples[Gi(i.title)]=i}}),t}var it=(e=>(e.Search="search",e.Book="book",e))(it||{});function Ho(e){return e[0]==="book"?"":e[1]?decodeURIComponent(e[1]):""}const Zn={hash:void 0,paths:["book"],search:void 0};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pi=globalThis,Wa=Pi.ShadowRoot&&(Pi.ShadyCSS===void 0||Pi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qa=Symbol(),kl=new WeakMap;let t0=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==qa)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Wa&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=kl.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&kl.set(n,t))}return t}toString(){return this.cssText}};const ue=e=>new t0(typeof e=="string"?e:e+"",void 0,qa),Li=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new t0(n,e,qa)},ob=(e,t)=>{if(Wa)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),i=Pi.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},Sl=Wa?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return ue(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ab,defineProperty:ub,getOwnPropertyDescriptor:lb,getOwnPropertyNames:cb,getOwnPropertySymbols:fb,getPrototypeOf:db}=Object,$s=globalThis,Fl=$s.trustedTypes,hb=Fl?Fl.emptyScript:"",mb=$s.reactiveElementPolyfillSupport,Ar=(e,t)=>e,Zi={toAttribute(e,t){switch(t){case Boolean:e=e?hb:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ja=(e,t)=>!ab(e,t),Tl={attribute:!0,type:String,converter:Zi,reflect:!1,hasChanged:ja};Symbol.metadata??=Symbol("metadata"),$s.litPropertyMetadata??=new WeakMap;let xn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Tl){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&ub(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:s}=lb(this.prototype,t)??{get(){return this[n]},set(o){this[n]=o}};return{get(){return i?.call(this)},set(o){const a=i?.call(this);s.call(this,o),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Tl}static _$Ei(){if(this.hasOwnProperty(Ar("elementProperties")))return;const t=db(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ar("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ar("properties"))){const n=this.properties,r=[...cb(n),...fb(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(Sl(i))}else t!==void 0&&n.push(Sl(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ob(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EC(t,n){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const s=(r.converter?.toAttribute!==void 0?r.converter:Zi).toAttribute(n,r.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,n){const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Zi;this._$Em=i,this[i]=o.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??ja)(this[t],n))return;this.P(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,s]of r)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(n=>this._$EC(n,this[n])),this._$EU()}updated(t){}firstUpdated(t){}};xn.elementStyles=[],xn.shadowRootOptions={mode:"open"},xn[Ar("elementProperties")]=new Map,xn[Ar("finalized")]=new Map,mb?.({ReactiveElement:xn}),($s.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const za=globalThis,Yi=za.trustedTypes,Ml=Yi?Yi.createPolicy("lit-html",{createHTML:e=>e}):void 0,n0="$lit$",jt=`lit$${Math.random().toFixed(9).slice(2)}$`,r0="?"+jt,pb=`<${r0}>`,bn=document,Mr=()=>bn.createComment(""),Nr=e=>e===null||typeof e!="object"&&typeof e!="function",Ga=Array.isArray,gb=e=>Ga(e)||typeof e?.[Symbol.iterator]=="function",Eo=`[ 	
\f\r]`,hr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Nl=/-->/g,xl=/>/g,ln=RegExp(`>|${Eo}(?:([^\\s"'>=/]+)(${Eo}*=${Eo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Bl=/'/g,Pl=/"/g,i0=/^(?:script|style|textarea|title)$/i,wb=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),yb=wb(1),ze=Symbol.for("lit-noChange"),re=Symbol.for("lit-nothing"),Ll=new WeakMap,mn=bn.createTreeWalker(bn,129);function s0(e,t){if(!Ga(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ml!==void 0?Ml.createHTML(t):t}const bb=(e,t)=>{const n=e.length-1,r=[];let i,s=t===2?"<svg>":t===3?"<math>":"",o=hr;for(let a=0;a<n;a++){const u=e[a];let l,f,c=-1,d=0;for(;d<u.length&&(o.lastIndex=d,f=o.exec(u),f!==null);)d=o.lastIndex,o===hr?f[1]==="!--"?o=Nl:f[1]!==void 0?o=xl:f[2]!==void 0?(i0.test(f[2])&&(i=RegExp("</"+f[2],"g")),o=ln):f[3]!==void 0&&(o=ln):o===ln?f[0]===">"?(o=i??hr,c=-1):f[1]===void 0?c=-2:(c=o.lastIndex-f[2].length,l=f[1],o=f[3]===void 0?ln:f[3]==='"'?Pl:Bl):o===Pl||o===Bl?o=ln:o===Nl||o===xl?o=hr:(o=ln,i=void 0);const p=o===ln&&e[a+1].startsWith("/>")?" ":"";s+=o===hr?u+pb:c>=0?(r.push(l),u.slice(0,c)+n0+u.slice(c)+jt+p):u+jt+(c===-2?a:p)}return[s0(e,s+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class xr{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const a=t.length-1,u=this.parts,[l,f]=bb(t,n);if(this.el=xr.createElement(l,r),mn.currentNode=this.el.content,n===2||n===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=mn.nextNode())!==null&&u.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(n0)){const d=f[o++],p=i.getAttribute(c).split(jt),y=/([.?@])?(.*)/.exec(d);u.push({type:1,index:s,name:y[2],strings:p,ctor:y[1]==="."?Db:y[1]==="?"?vb:y[1]==="@"?Ab:Cs}),i.removeAttribute(c)}else c.startsWith(jt)&&(u.push({type:6,index:s}),i.removeAttribute(c));if(i0.test(i.tagName)){const c=i.textContent.split(jt),d=c.length-1;if(d>0){i.textContent=Yi?Yi.emptyScript:"";for(let p=0;p<d;p++)i.append(c[p],Mr()),mn.nextNode(),u.push({type:2,index:++s});i.append(c[d],Mr())}}}else if(i.nodeType===8)if(i.data===r0)u.push({type:2,index:s});else{let c=-1;for(;(c=i.data.indexOf(jt,c+1))!==-1;)u.push({type:7,index:s}),c+=jt.length-1}s++}}static createElement(t,n){const r=bn.createElement("template");return r.innerHTML=t,r}}function Yn(e,t,n=e,r){if(t===ze)return t;let i=r!==void 0?n._$Co?.[r]:n._$Cl;const s=Nr(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=i:n._$Cl=i),i!==void 0&&(t=Yn(e,i._$AS(e,t.values),i,r)),t}let Eb=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=(t?.creationScope??bn).importNode(n,!0);mn.currentNode=i;let s=mn.nextNode(),o=0,a=0,u=r[0];for(;u!==void 0;){if(o===u.index){let l;u.type===2?l=new sr(s,s.nextSibling,this,t):u.type===1?l=new u.ctor(s,u.name,u.strings,this,t):u.type===6&&(l=new $b(s,this,t)),this._$AV.push(l),u=r[++a]}o!==u?.index&&(s=mn.nextNode(),o++)}return mn.currentNode=bn,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}};class sr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=re,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Yn(this,t,n),Nr(t)?t===re||t==null||t===""?(this._$AH!==re&&this._$AR(),this._$AH=re):t!==this._$AH&&t!==ze&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):gb(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==re&&Nr(this._$AH)?this._$AA.nextSibling.data=t:this.T(bn.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=xr.createElement(s0(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(n);else{const s=new Eb(i,this),o=s.u(this.options);s.p(n),this.T(o),this._$AH=s}}_$AC(t){let n=Ll.get(t.strings);return n===void 0&&Ll.set(t.strings,n=new xr(t)),n}k(t){Ga(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of t)i===n.length?n.push(r=new sr(this.O(Mr()),this.O(Mr()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Cs{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,s){this.type=1,this._$AH=re,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=re}_$AI(t,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)t=Yn(this,t,n,0),o=!Nr(t)||t!==this._$AH&&t!==ze,o&&(this._$AH=t);else{const a=t;let u,l;for(t=s[0],u=0;u<s.length-1;u++)l=Yn(this,a[r+u],n,u),l===ze&&(l=this._$AH[u]),o||=!Nr(l)||l!==this._$AH[u],l===re?t=re:t!==re&&(t+=(l??"")+s[u+1]),this._$AH[u]=l}o&&!i&&this.j(t)}j(t){t===re?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Db extends Cs{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===re?void 0:t}}class vb extends Cs{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==re)}}class Ab extends Cs{constructor(t,n,r,i,s){super(t,n,r,i,s),this.type=5}_$AI(t,n=this){if((t=Yn(this,t,n,0)??re)===ze)return;const r=this._$AH,i=t===re&&r!==re||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==re&&(r===re||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class $b{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Yn(this,t)}}const Cb={I:sr},kb=za.litHtmlPolyfillSupport;kb?.(xr,sr),(za.litHtmlVersions??=[]).push("3.2.1");const Sb=(e,t,n)=>{const r=n?.renderBefore??t;let i=r._$litPart$;if(i===void 0){const s=n?.renderBefore??null;r._$litPart$=i=new sr(t.insertBefore(Mr(),s),s,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let $r=class extends xn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Sb(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ze}};$r._$litElement$=!0,$r.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:$r});const Fb=globalThis.litElementPolyfillSupport;Fb?.({LitElement:$r});(globalThis.litElementVersions??=[]).push("4.1.1");function en(e){if(E.isObject(e))return we(e,(n,r)=>{if(!E.isString(n))throw new TypeError(`Invalid CSS var name '${String(n)}' given. CSS var names must be strings.`);if(ky(n).toLowerCase()!==n)throw new Error(`Invalid CSS var name '${n}' given. CSS var names must be in lower kebab case.`);const s=r,o=n.startsWith("--")?ue(n):n.startsWith("-")?Li`-${ue(n)}`:Li`--${ue(n)}`;return{name:o,value:Li`var(${o}, ${ue(s)})`,default:String(s)}});throw new TypeError(`Invalid setup input for '${en.name}' function.`)}function Tb({onElement:e,toValue:t,forCssVar:n}){e.style.setProperty(String(n.name),String(t))}const Z=en({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Mb={nav:{hover:{background:Z["element-book-nav-hover-background-color"],foreground:Z["element-book-nav-hover-foreground-color"]},active:{background:Z["element-book-nav-active-background-color"],foreground:Z["element-book-nav-active-foreground-color"]},selected:{background:Z["element-book-nav-selected-background-color"],foreground:Z["element-book-nav-selected-foreground-color"]}},accent:{icon:Z["element-book-accent-icon-color"]},page:{background:Z["element-book-page-background-color"],backgroundFaint1:Z["element-book-page-background-faint-level-1-color"],backgroundFaint2:Z["element-book-page-background-faint-level-2-color"],foreground:Z["element-book-page-foreground-color"],foregroundFaint1:Z["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:Z["element-book-page-foreground-faint-level-2-color"]}};function Nb(e,t){o0(e,t,Mb)}function Qo(e){return E.hasKey(e,"_$cssResult$")}function Il(e){return E.hasKeys(e,["name","value","default"])&&E.isString(e.default)&&Qo(e.name)&&Qo(e.value)}function o0(e,t,n){Object.entries(t).forEach(([r,i])=>{const s=n[r];if(!s)throw new Error(`no nestedCssVar at key '${r}'`);if(Qo(i)){if(!Il(s))throw new Error(`got a CSS result at '${r}' but no CSS var`);Tb({forCssVar:s,onElement:e,toValue:String(i)})}else{if(Il(s))throw new Error(`got no CSS result at '${r}' but did find a CSS var`);o0(e,i,s)}})}function ie(e,t){let n=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(o=>[o]));let r=t[0].length,i=t[0].map((o,a)=>t.map(u=>u[a])),s=e.map(o=>i.map(a=>{let u=0;if(!Array.isArray(o)){for(let l of a)u+=o*l;return u}for(let l=0;l<o.length;l++)u+=o[l]*(a[l]||0);return u}));return n===1&&(s=s[0]),r===1?s.map(o=>o[0]):s}function ei(e){return Zt(e)==="string"}function Zt(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Ji(e,{precision:t,unit:n}){return Yt(e)?"none":a0(e,t)+(n??"")}function Yt(e){return Number.isNaN(e)||e instanceof Number&&e?.none}function ce(e){return Yt(e)?0:e}function a0(e,t){if(e===0)return 0;let n=~~e,r=0;n&&t&&(r=~~Math.log10(Math.abs(n))+1);const i=10**(t-r);return Math.floor(e*i+.5)/i}const xb={deg:1,grad:.9,rad:180/Math.PI,turn:360};function u0(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,n=/^-?[\d.]+$/,r=/%|deg|g?rad|turn$/,i=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let s=e.match(t);if(s){let o=[];return s[2].replace(i,(a,u)=>{let l=u.match(r),f=u;if(l){let c=l[0],d=f.slice(0,-c.length);c==="%"?(f=new Number(d/100),f.type="<percentage>"):(f=new Number(d*xb[c]),f.type="<angle>",f.unit=c)}else n.test(f)?(f=new Number(f),f.type="<number>"):f==="none"&&(f=new Number(NaN),f.none=!0);a.startsWith("/")&&(f=f instanceof Number?f:new Number(f),f.alpha=!0),typeof f=="object"&&f instanceof Number&&(f.raw=u),o.push(f)}),{name:s[1].toLowerCase(),rawName:s[1],rawArgs:s[2],args:o}}}function l0(e){return e[e.length-1]}function Br(e,t,n){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*n}function c0(e,t,n){return(n-e)/(t-e)}function Ka(e,t,n){return Br(t[0],t[1],c0(e[0],e[1],n))}function f0(e){return e.map(t=>t.split("|").map(n=>{n=n.trim();let r=n.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(r){let i=new String(r[1]);return i.range=[+r[2],+r[3]],i}return n}))}function d0(e,t,n){return Math.max(Math.min(n,t),e)}function ks(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function pt(e,t){return ks(Math.abs(e)**t,e)}function Za(e,t){return t===0?0:e/t}function h0(e,t,n=0,r=e.length){for(;n<r;){const i=n+r>>1;e[i]<t?n=i+1:r=i}return n}var Bb=Object.freeze({__proto__:null,bisectLeft:h0,clamp:d0,copySign:ks,interpolate:Br,interpolateInv:c0,isNone:Yt,isString:ei,last:l0,mapRange:Ka,multiplyMatrices:ie,parseCoordGrammar:f0,parseFunction:u0,serializeNumber:Ji,skipNone:ce,spow:pt,toPrecision:a0,type:Zt,zdiv:Za});class Pb{add(t,n,r){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(i){this[i]=this[i]||[],n&&this[i][r?"unshift":"push"](n)},this)}run(t,n){this[t]=this[t]||[],this[t].forEach(function(r){r.call(n&&n.context?n.context:n,n)})}}const Jt=new Pb;var Ge={gamut_mapping:"css",precision:5,deltaE:"76",verbose:globalThis?.process?.env?.NODE_ENV?.toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};const $e={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Xo(e){return Array.isArray(e)?e:$e[e]}function Hi(e,t,n,r={}){if(e=Xo(e),t=Xo(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return n;let i={W1:e,W2:t,XYZ:n,options:r};if(Jt.run("chromatic-adaptation-start",i),i.M||(i.W1===$e.D65&&i.W2===$e.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===$e.D50&&i.W2===$e.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),Jt.run("chromatic-adaptation-end",i),i.M)return ie(i.M,i.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Lb=new Set(["<number>","<percentage>","<angle>"]);function Rl(e,t,n,r){return Object.entries(e.coords).map(([s,o],a)=>{let u=t.coordGrammar[a],l=r[a],f=l?.type,c;if(l.none?c=u.find(y=>Lb.has(y)):c=u.find(y=>y==f),!c){let y=o.name||s;throw new TypeError(`${f??l.raw} not allowed for ${y} in ${n}()`)}let d=c.range;f==="<percentage>"&&(d||=[0,1]);let p=o.range||o.refRange;return d&&p&&(r[a]=Ka(d,p,r[a])),c})}function m0(e,{meta:t}={}){let n={str:String(e)?.trim()};if(Jt.run("parse-start",n),n.color)return n.color;if(n.parsed=u0(n.str),n.parsed){let r=n.parsed.name;if(r==="color"){let i=n.parsed.args.shift(),s=i.startsWith("--")?i.substring(2):`--${i}`,o=[i,s],a=n.parsed.rawArgs.indexOf("/")>0?n.parsed.args.pop():1;for(let f of B.all){let c=f.getFormat("color");if(c&&(o.includes(c.id)||c.ids?.filter(d=>o.includes(d)).length)){const d=Object.keys(f.coords).map((y,D)=>n.parsed.args[D]||0);let p;return c.coordGrammar&&(p=Rl(f,c,"color",d)),t&&Object.assign(t,{formatId:"color",types:p}),c.id.startsWith("--")&&!i.startsWith("--")&&Ge.warn(`${f.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${c.id}) instead of color(${i}).`),i.startsWith("--")&&!c.id.startsWith("--")&&Ge.warn(`${f.name} is a standard space and supported in the CSS spec. Use color(${c.id}) instead of prefixed color(${i}).`),{spaceId:f.id,coords:d,alpha:a}}}let u="",l=i in B.registry?i:s;if(l in B.registry){let f=B.registry[l].formats?.color?.id;f&&(u=`Did you mean color(${f})?`)}throw new TypeError(`Cannot parse color(${i}). `+(u||"Missing a plugin?"))}else for(let i of B.all){let s=i.getFormat(r);if(s&&s.type==="function"){let o=1;(s.lastAlpha||l0(n.parsed.args).alpha)&&(o=n.parsed.args.pop());let a=n.parsed.args,u;return s.coordGrammar&&(u=Rl(i,s,r,a)),t&&Object.assign(t,{formatId:s.name,types:u}),{spaceId:i.id,coords:a,alpha:o}}}}else for(let r of B.all)for(let i in r.formats){let s=r.formats[i];if(s.type!=="custom"||s.test&&!s.test(n.str))continue;let o=s.parse(n.str);if(o)return o.alpha??=1,t&&(t.formatId=i),o}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function q(e){if(Array.isArray(e))return e.map(q);if(!e)throw new TypeError("Empty color reference");ei(e)&&(e=m0(e));let t=e.space||e.spaceId;return t instanceof B||(e.space=B.get(t)),e.alpha===void 0&&(e.alpha=1),e}const Ib=75e-6;class B{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?B.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let n=t.coords??this.base.coords;for(let i in n)"name"in n[i]||(n[i].name=i);this.coords=n;let r=t.white??this.base.white??"D65";this.white=Xo(r),this.formats=t.formats??{};for(let i in this.formats){let s=this.formats[i];s.type||="function",s.name||=i}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:B.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,s)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:Rb(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),Jt.run("colorspace-init-end",this)}inGamut(t,{epsilon:n=Ib}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:n});let r=Object.values(this.coords);return t.every((i,s)=>{let o=r[s];if(o.type!=="angle"&&o.range){if(Number.isNaN(i))return!0;let[a,u]=o.range;return(a===void 0||i>=a-n)&&(u===void 0||i<=u+n)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=Ol(t,this),t;let n;return t==="default"?n=Object.values(this.formats)[0]:n=this.formats[t],n?(n=Ol(n,this),n):null}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,n){if(arguments.length===1){const a=q(t);[t,n]=[a.space,a.coords]}if(t=B.get(t),this.equals(t))return n;n=n.map(a=>Number.isNaN(a)?0:a);let r=this.path,i=t.path,s,o;for(let a=0;a<r.length&&r[a].equals(i[a]);a++)s=r[a],o=a;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=r.length-1;a>o;a--)n=r[a].toBase(n);for(let a=o+1;a<i.length;a++)n=i[a].fromBase(n);return n}from(t,n){if(arguments.length===1){const r=q(t);[t,n]=[r.space,r.coords]}return t=B.get(t),t.to(this,n)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let n in this.coords){let r=this.coords[n],i=r.range||r.refRange;t.push(i?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(B.registry))]}static register(t,n){if(arguments.length===1&&(n=arguments[0],t=n.id),n=this.get(n),this.registry[t]&&this.registry[t]!==n)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=n,arguments.length===1&&n.aliases)for(let r of n.aliases)this.register(r,n);return n}static get(t,...n){if(!t||t instanceof B)return t;if(Zt(t)==="string"){let i=B.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(n.length)return B.get(...n);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,n){let r=Zt(t),i,s;if(r==="string"?t.includes(".")?[i,s]=t.split("."):[i,s]=[,t]:Array.isArray(t)?[i,s]=t:(i=t.space,s=t.coordId),i=B.get(i),i||(i=n),!i)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(r=Zt(s),r==="number"||r==="string"&&s>=0){let u=Object.entries(i.coords)[s];if(u)return{space:i,id:u[0],index:s,...u[1]}}i=B.get(i);let o=s.toLowerCase(),a=0;for(let u in i.coords){let l=i.coords[u];if(u.toLowerCase()===o||l.name?.toLowerCase()===o)return{space:i,id:u,index:a,...l};a++}throw new TypeError(`No "${s}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function Rb(e){let t=[e];for(let n=e;n=n.base;)t.push(n);return t}function Ol(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||="function",e.name||="color",e.coordGrammar=f0(e.coords);let n=Object.entries(t).map(([r,i],s)=>{let o=e.coordGrammar[s][0],a=i.range||i.refRange,u=o.range,l="";return o=="<percentage>"?(u=[0,100],l="%"):o=="<angle>"&&(l="deg"),{fromRange:a,toRange:u,suffix:l}});e.serializeCoords=(r,i)=>r.map((s,o)=>{let{fromRange:a,toRange:u,suffix:l}=n[o];return a&&u&&(s=Ka(a,u,s)),s=Ji(s,{precision:i,unit:l}),s})}return e}var ge=new B({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class Ie extends B{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=ge),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=n=>{let r=ie(t.toXYZ_M,n);return this.white!==this.base.white&&(r=Hi(this.white,this.base.white,r)),r},t.fromBase??=n=>(n=Hi(this.base.white,this.white,n),ie(t.fromXYZ_M,n))),t.referred??="display",super(t)}}function ti(e,t){return e=q(e),!t||e.space.equals(t)?e.coords.slice():(t=B.get(t),t.from(e))}function Ue(e,t){e=q(e);let{space:n,index:r}=B.resolveCoord(t,e.space);return ti(e,n)[r]}function Ya(e,t,n){return e=q(e),t=B.get(t),e.coords=t.to(e.space,n),e}Ya.returns="color";function Nt(e,t,n){if(e=q(e),arguments.length===2&&Zt(arguments[1])==="object"){let r=arguments[1];for(let i in r)Nt(e,i,r[i])}else{typeof n=="function"&&(n=n(Ue(e,t)));let{space:r,index:i}=B.resolveCoord(t,e.space),s=ti(e,r);s[i]=n,Ya(e,r,s)}return e}Nt.returns="color";var Ja=new B({id:"xyz-d50",name:"XYZ D50",white:"D50",base:ge,fromBase:e=>Hi(ge.white,"D50",e),toBase:e=>Hi("D50",ge.white,e)});const Ob=216/24389,_l=24/116,pi=24389/27;let Do=$e.D50;var We=new B({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Do,base:Ja,fromBase(e){let n=e.map((r,i)=>r/Do[i]).map(r=>r>Ob?Math.cbrt(r):(pi*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>_l?Math.pow(t[0],3):(116*t[0]-16)/pi,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/pi,t[2]>_l?Math.pow(t[2],3):(116*t[2]-16)/pi].map((r,i)=>r*Do[i])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function yt(e){return(e%360+360)%360}function _b(e,t){if(e==="raw")return t;let[n,r]=t.map(yt),i=r-n;return e==="increasing"?i<0&&(r+=360):e==="decreasing"?i>0&&(n+=360):e==="longer"?-180<i&&i<180&&(i>0?n+=360:r+=360):e==="shorter"&&(i>180?n+=360:i<-180&&(r+=360)),[n,r]}var Pr=new B({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:We,fromBase(e){let[t,n,r]=e,i;const s=.02;return Math.abs(n)<s&&Math.abs(r)<s?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),yt(i)]},toBase(e){let[t,n,r]=e;return n<0&&(n=0),isNaN(r)&&(r=0),[t,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const Vl=25**7,Qi=Math.PI,Ul=180/Qi,kn=Qi/180;function Wl(e){const t=e*e;return t*t*t*e}function p0(e,t,{kL:n=1,kC:r=1,kH:i=1}={}){[e,t]=q([e,t]);let[s,o,a]=We.from(e),u=Pr.from(We,[s,o,a])[1],[l,f,c]=We.from(t),d=Pr.from(We,[l,f,c])[1];u<0&&(u=0),d<0&&(d=0);let p=(u+d)/2,y=Wl(p),D=.5*(1-Math.sqrt(y/(y+Vl))),$=(1+D)*o,A=(1+D)*f,F=Math.sqrt($**2+a**2),I=Math.sqrt(A**2+c**2),_=$===0&&a===0?0:Math.atan2(a,$),G=A===0&&c===0?0:Math.atan2(c,A);_<0&&(_+=2*Qi),G<0&&(G+=2*Qi),_*=Ul,G*=Ul;let ve=l-s,It=I-F,ke=G-_,Re=_+G,dt=Math.abs(ke),sn;F*I===0?sn=0:dt<=180?sn=ke:ke>180?sn=ke-360:ke<-180?sn=ke+360:Ge.warn("the unthinkable has happened");let hu=2*Math.sqrt(I*F)*Math.sin(sn*kn/2),Km=(s+l)/2,Zs=(F+I)/2,mu=Wl(Zs),bt;F*I===0?bt=Re:dt<=180?bt=Re/2:Re<360?bt=(Re+360)/2:bt=(Re-360)/2;let pu=(Km-50)**2,Zm=1+.015*pu/Math.sqrt(20+pu),gu=1+.045*Zs,ar=1;ar-=.17*Math.cos((bt-30)*kn),ar+=.24*Math.cos(2*bt*kn),ar+=.32*Math.cos((3*bt+6)*kn),ar-=.2*Math.cos((4*bt-63)*kn);let wu=1+.015*Zs*ar,Ym=30*Math.exp(-1*((bt-275)/25)**2),Jm=2*Math.sqrt(mu/(mu+Vl)),Hm=-1*Math.sin(2*Ym*kn)*Jm,ai=(ve/(n*Zm))**2;return ai+=(It/(r*gu))**2,ai+=(hu/(i*wu))**2,ai+=Hm*(It/(r*gu))*(hu/(i*wu)),Math.sqrt(ai)}const Vb=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],Ub=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],Wb=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],qb=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var Jn=new B({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:ge,fromBase(e){let n=ie(Vb,e).map(r=>Math.cbrt(r));return ie(Wb,n)},toBase(e){let n=ie(qb,e).map(r=>r**3);return ie(Ub,n)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function ea(e,t){[e,t]=q([e,t]);let[n,r,i]=Jn.from(e),[s,o,a]=Jn.from(t),u=n-s,l=r-o,f=i-a;return Math.sqrt(u**2+l**2+f**2)}const jb=75e-6;function yn(e,t,{epsilon:n=jb}={}){e=q(e),t||(t=e.space),t=B.get(t);let r=e.coords;return t!==e.space&&(r=t.from(e)),t.inGamut(r,{epsilon:n})}function Hn(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function g0(e,t,n="lab"){n=B.get(n);let r=n.from(e),i=n.from(t);return Math.sqrt(r.reduce((s,o,a)=>{let u=i[a];return isNaN(o)||isNaN(u)?s:s+(u-o)**2},0))}function zb(e,t){return g0(e,t,"lab")}const Gb=Math.PI,ql=Gb/180;function Kb(e,t,{l:n=2,c:r=1}={}){[e,t]=q([e,t]);let[i,s,o]=We.from(e),[,a,u]=Pr.from(We,[i,s,o]),[l,f,c]=We.from(t),d=Pr.from(We,[l,f,c])[1];a<0&&(a=0),d<0&&(d=0);let p=i-l,y=a-d,D=s-f,$=o-c,A=D**2+$**2-y**2,F=.511;i>=16&&(F=.040975*i/(1+.01765*i));let I=.0638*a/(1+.0131*a)+.638,_;Number.isNaN(u)&&(u=0),u>=164&&u<=345?_=.56+Math.abs(.2*Math.cos((u+168)*ql)):_=.36+Math.abs(.4*Math.cos((u+35)*ql));let G=Math.pow(a,4),ve=Math.sqrt(G/(G+1900)),It=I*(ve*_+1-ve),ke=(p/(n*F))**2;return ke+=(y/(r*I))**2,ke+=A/It**2,Math.sqrt(ke)}const jl=203;var Ha=new B({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:ge,fromBase(e){return e.map(t=>Math.max(t*jl,0))},toBase(e){return e.map(t=>Math.max(t/jl,0))}});const gi=1.15,wi=.66,zl=2610/2**14,Zb=2**14/2610,Gl=3424/2**12,Kl=2413/2**7,Zl=2392/2**7,Yb=1.7*2523/2**5,Yl=2**5/(1.7*2523),yi=-.56,vo=16295499532821565e-27,Jb=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Hb=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Qb=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Xb=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var w0=new B({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Ha,fromBase(e){let[t,n,r]=e,i=gi*t-(gi-1)*r,s=wi*n-(wi-1)*t,a=ie(Jb,[i,s,r]).map(function(d){let p=Gl+Kl*(d/1e4)**zl,y=1+Zl*(d/1e4)**zl;return(p/y)**Yb}),[u,l,f]=ie(Qb,a);return[(1+yi)*u/(1+yi*u)-vo,l,f]},toBase(e){let[t,n,r]=e,i=(t+vo)/(1+yi-yi*(t+vo)),o=ie(Xb,[i,n,r]).map(function(d){let p=Gl-d**Yl,y=Zl*d**Yl-Kl;return 1e4*(p/y)**Zb}),[a,u,l]=ie(Hb,o),f=(a+(gi-1)*l)/gi,c=(u+(wi-1)*f)/wi;return[f,c,l]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),ta=new B({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:w0,fromBase(e){let[t,n,r]=e,i;const s=2e-4;return Math.abs(n)<s&&Math.abs(r)<s?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),yt(i)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}});function eE(e,t){[e,t]=q([e,t]);let[n,r,i]=ta.from(e),[s,o,a]=ta.from(t),u=n-s,l=r-o;Number.isNaN(i)&&Number.isNaN(a)?(i=0,a=0):Number.isNaN(i)?i=a:Number.isNaN(a)&&(a=i);let f=i-a,c=2*Math.sqrt(r*o)*Math.sin(f/2*(Math.PI/180));return Math.sqrt(u**2+l**2+c**2)}const y0=3424/4096,b0=2413/128,E0=2392/128,Jl=2610/16384,tE=2523/32,nE=16384/2610,Hl=32/2523,rE=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],iE=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],sE=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],oE=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var na=new B({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Ha,fromBase(e){let t=ie(rE,e);return aE(t)},toBase(e){let t=uE(e);return ie(oE,t)}});function aE(e){let t=e.map(function(n){let r=y0+b0*(n/1e4)**Jl,i=1+E0*(n/1e4)**Jl;return(r/i)**tE});return ie(iE,t)}function uE(e){return ie(sE,e).map(function(r){let i=Math.max(r**Hl-y0,0),s=b0-E0*r**Hl;return 1e4*(i/s)**nE})}function lE(e,t){[e,t]=q([e,t]);let[n,r,i]=na.from(e),[s,o,a]=na.from(t);return 720*Math.sqrt((n-s)**2+.25*(r-o)**2+(i-a)**2)}const cE=$e.D65,D0=.42,Ql=1/D0,Ao=2*Math.PI,v0=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fE=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],dE=[[460,451,288],[460,-891,-261],[460,-220,-6300]],hE={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},dn={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},mE=180/Math.PI,Xl=Math.PI/180;function A0(e,t){return e.map(r=>{const i=pt(t*Math.abs(r)*.01,D0);return 400*ks(i,r)/(i+27.13)})}function pE(e,t){const n=100/t*27.13**Ql;return e.map(r=>{const i=Math.abs(r);return ks(n*pt(i/(400-i),Ql),r)})}function gE(e){let t=yt(e);t<=dn.h[0]&&(t+=360);const n=h0(dn.h,t)-1,[r,i]=dn.h.slice(n,n+2),[s,o]=dn.e.slice(n,n+2),a=dn.H[n],u=(t-r)/s;return a+100*u/(u+(i-t)/o)}function wE(e){let t=(e%400+400)%400;const n=Math.floor(.01*t);t=t%100;const[r,i]=dn.h.slice(n,n+2),[s,o]=dn.e.slice(n,n+2);return yt((t*(o*r-s*i)-100*r*o)/(t*(o-s)-100*o))}function $0(e,t,n,r,i){const s={};s.discounting=i,s.refWhite=e,s.surround=r;const o=e.map(D=>D*100);s.la=t,s.yb=n;const a=o[1],u=ie(v0,o);r=hE[s.surround];const l=r[0];s.c=r[1],s.nc=r[2];const c=(1/(5*s.la+1))**4;s.fl=c*s.la+.1*(1-c)*(1-c)*Math.cbrt(5*s.la),s.flRoot=s.fl**.25,s.n=s.yb/a,s.z=1.48+Math.sqrt(s.n),s.nbb=.725*s.n**-.2,s.ncb=s.nbb;const d=Math.max(Math.min(l*(1-1/3.6*Math.exp((-s.la-42)/92)),1),0);s.dRgb=u.map(D=>Br(1,a/D,d)),s.dRgbInv=s.dRgb.map(D=>1/D);const p=u.map((D,$)=>D*s.dRgb[$]),y=A0(p,s.fl);return s.aW=s.nbb*(2*y[0]+y[1]+.05*y[2]),s}const ec=$0(cE,64/Math.PI*.2,20,"average",!1);function ra(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let n=0;e.h!==void 0?n=yt(e.h)*Xl:n=wE(e.H)*Xl;const r=Math.cos(n),i=Math.sin(n);let s=0;e.J!==void 0?s=pt(e.J,1/2)*.1:e.Q!==void 0&&(s=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let o=0;e.C!==void 0?o=e.C/s:e.M!==void 0?o=e.M/t.flRoot/s:e.s!==void 0&&(o=4e-4*e.s**2*(t.aW+4)/t.c);const a=pt(o*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(n+2)+3.8),l=t.aW*pt(s,2/t.c/t.z),f=5e4/13*t.nc*t.ncb*u,c=l/t.nbb,d=23*(c+.305)*Za(a,23*f+a*(11*r+108*i)),p=d*r,y=d*i,D=pE(ie(dE,[c,p,y]).map($=>$*1/1403),t.fl);return ie(fE,D.map(($,A)=>$*t.dRgbInv[A])).map($=>$/100)}function C0(e,t){const n=e.map(I=>I*100),r=A0(ie(v0,n).map((I,_)=>I*t.dRgb[_]),t.fl),i=r[0]+(-12*r[1]+r[2])/11,s=(r[0]+r[1]-2*r[2])/9,o=(Math.atan2(s,i)%Ao+Ao)%Ao,a=.25*(Math.cos(o+2)+3.8),u=5e4/13*t.nc*t.ncb*Za(a*Math.sqrt(i**2+s**2),r[0]+r[1]+1.05*r[2]+.305),l=pt(u,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),f=t.nbb*(2*r[0]+r[1]+.05*r[2]),c=pt(f/t.aW,.5*t.c*t.z),d=100*pt(c,2),p=4/t.c*c*(t.aW+4)*t.flRoot,y=l*c,D=y*t.flRoot,$=yt(o*mE),A=gE($),F=50*pt(t.c*l/(t.aW+4),1/2);return{J:d,C:y,h:$,s:F,Q:p,M:D,H:A}}var yE=new B({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:ge,fromBase(e){const t=C0(e,ec);return[t.J,t.M,t.h]},toBase(e){return ra({J:e[0],M:e[1],h:e[2]},ec)}});const bE=$e.D65,EE=216/24389,k0=24389/27;function DE(e){return 116*(e>EE?Math.cbrt(e):(k0*e+16)/116)-16}function ia(e){return e>8?Math.pow((e+16)/116,3):e/k0}function vE(e,t){let[n,r,i]=e,s=[],o=0;if(i===0)return[0,0,0];let a=ia(i);i>0?o=.00379058511492914*i**2+.608983189401032*i+.9155088574762233:o=9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;const u=2e-12,l=15;let f=0,c=1/0;for(;f<=l;){s=ra({J:o,C:r,h:n},t);const d=Math.abs(s[1]-a);if(d<c){if(d<=u)return s;c=d}o=o-(s[1]-a)*o/(2*s[1]),f+=1}return ra({J:o,C:r,h:n},t)}function AE(e,t){const n=DE(e[1]);if(n===0)return[0,0,0];const r=C0(e,Qa);return[yt(r.h),r.C,n]}const Qa=$0(bE,200/Math.PI*ia(50),ia(50)*100,"average",!1);var Lr=new B({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:ge,fromBase(e){return AE(e)},toBase(e){return vE(e,Qa)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const $E=Math.PI/180,tc=[1,.007,.0228];function nc(e){e[1]<0&&(e=Lr.fromBase(Lr.toBase(e)));const t=Math.log(Math.max(1+tc[2]*e[1]*Qa.flRoot,1))/tc[2],n=e[0]*$E,r=t*Math.cos(n),i=t*Math.sin(n);return[e[2],r,i]}function CE(e,t){[e,t]=q([e,t]);let[n,r,i]=nc(Lr.from(e)),[s,o,a]=nc(Lr.from(t));return Math.sqrt((n-s)**2+(r-o)**2+(i-a)**2)}var Qn={deltaE76:zb,deltaECMC:Kb,deltaE2000:p0,deltaEJz:eE,deltaEITP:lE,deltaEOK:ea,deltaEHCT:CE};function kE(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const rc={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function Ht(e,{method:t=Ge.gamut_mapping,space:n=void 0,deltaEMethod:r="",jnd:i=2,blackWhiteClamp:s={}}={}){if(e=q(e),ei(arguments[1])?n=arguments[1]:n||(n=e.space),n=B.get(n),yn(e,n,{epsilon:0}))return e;let o;if(t==="css")o=SE(e,{space:n});else{if(t!=="clip"&&!yn(e,n)){Object.prototype.hasOwnProperty.call(rc,t)&&({method:t,jnd:i,deltaEMethod:r,blackWhiteClamp:s}=rc[t]);let a=p0;if(r!==""){for(let l in Qn)if("deltae"+r.toLowerCase()===l.toLowerCase()){a=Qn[l];break}}let u=Ht(ne(e,n),{method:"clip",space:n});if(a(e,u)>i){if(Object.keys(s).length===3){let F=B.resolveCoord(s.channel),I=Ue(ne(e,F.space),F.id);if(Yt(I)&&(I=0),I>=s.max)return ne({space:"xyz-d65",coords:$e.D65},e.space);if(I<=s.min)return ne({space:"xyz-d65",coords:[0,0,0]},e.space)}let l=B.resolveCoord(t),f=l.space,c=l.id,d=ne(e,f);d.coords.forEach((F,I)=>{Yt(F)&&(d.coords[I]=0)});let y=(l.range||l.refRange)[0],D=kE(i),$=y,A=Ue(d,c);for(;A-$>D;){let F=Hn(d);F=Ht(F,{space:n,method:"clip"}),a(d,F)-i<D?$=Ue(d,c):A=Ue(d,c),Nt(d,c,($+A)/2)}o=ne(d,n)}else o=u}else o=ne(e,n);if(t==="clip"||!yn(o,n,{epsilon:0})){let a=Object.values(n.coords).map(u=>u.range||[]);o.coords=o.coords.map((u,l)=>{let[f,c]=a[l];return f!==void 0&&(u=Math.max(f,u)),c!==void 0&&(u=Math.min(u,c)),u})}}return n!==e.space&&(o=ne(o,e.space)),e.coords=o.coords,e}Ht.returns="color";const ic={WHITE:{space:Jn,coords:[1,0,0]},BLACK:{space:Jn,coords:[0,0,0]}};function SE(e,{space:t}={}){e=q(e),t||(t=e.space),t=B.get(t);const i=B.get("oklch");if(t.isUnbounded)return ne(e,t);const s=ne(e,i);let o=s.coords[0];if(o>=1){const y=ne(ic.WHITE,t);return y.alpha=e.alpha,ne(y,t)}if(o<=0){const y=ne(ic.BLACK,t);return y.alpha=e.alpha,ne(y,t)}if(yn(s,t,{epsilon:0}))return ne(s,t);function a(y){const D=ne(y,t),$=Object.values(t.coords);return D.coords=D.coords.map((A,F)=>{if("range"in $[F]){const[I,_]=$[F].range;return d0(I,A,_)}return A}),D}let u=0,l=s.coords[1],f=!0,c=Hn(s),d=a(c),p=ea(d,c);if(p<.02)return d;for(;l-u>1e-4;){const y=(u+l)/2;if(c.coords[1]=y,f&&yn(c,t,{epsilon:0}))u=y;else if(d=a(c),p=ea(d,c),p<.02){if(.02-p<1e-4)break;f=!1,u=y}else l=y}return d}function ne(e,t,{inGamut:n}={}){e=q(e),t=B.get(t);let r=t.from(e),i={space:t,coords:r,alpha:e.alpha};return n&&(i=Ht(i,n===!0?void 0:n)),i}ne.returns="color";function Cr(e,{precision:t=Ge.precision,format:n="default",inGamut:r=!0,...i}={}){let s;e=q(e);let o=n;n=e.space.getFormat(n)??e.space.getFormat("default")??B.DEFAULT_FORMAT;let a=e.coords.slice();if(r||=n.toGamut,r&&!yn(e)&&(a=Ht(Hn(e),r===!0?void 0:r).coords),n.type==="custom")if(i.precision=t,n.serialize)s=n.serialize(a,e.alpha,i);else throw new TypeError(`format ${o} can only be used to parse colors, not for serialization`);else{let u=n.name||"color";n.serializeCoords?a=n.serializeCoords(a,t):t!==null&&(a=a.map(d=>Ji(d,{precision:t})));let l=[...a];if(u==="color"){let d=n.id||n.ids?.[0]||e.space.id;l.unshift(d)}let f=e.alpha;t!==null&&(f=Ji(f,{precision:t}));let c=e.alpha>=1||n.noAlpha?"":`${n.commas?",":" /"} ${f}`;s=`${u}(${l.join(n.commas?", ":" ")}${c})`}return s}const FE=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],TE=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Ss=new Ie({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:FE,fromXYZ_M:TE});const bi=1.09929682680944,sc=.018053968510807;var S0=new Ie({id:"rec2020",name:"REC.2020",base:Ss,toBase(e){return e.map(function(t){return t<sc*4.5?t/4.5:Math.pow((t+bi-1)/bi,1/.45)})},fromBase(e){return e.map(function(t){return t>=sc?bi*Math.pow(t,.45)-(bi-1):4.5*t})}});const ME=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],NE=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var F0=new Ie({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:ME,fromXYZ_M:NE});const xE=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],me=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var T0=new Ie({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:xE,fromXYZ_M:me}),oc={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let ac=Array(3).fill("<percentage> | <number>[0, 255]"),uc=Array(3).fill("<number>[0, 255]");var Xn=new Ie({id:"srgb",name:"sRGB",base:T0,fromBase:e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r>.0031308?n*(1.055*r**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r<=.04045?t/12.92:n*((r+.055)/1.055)**2.4}),formats:{rgb:{coords:ac},rgb_number:{name:"rgb",commas:!0,coords:uc,noAlpha:!0},color:{},rgba:{coords:ac,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:uc},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,n=>{t.push(parseInt(n,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:n=!0}={})=>{t<1&&e.push(t),e=e.map(s=>Math.round(s*255));let r=n&&e.every(s=>s%17===0);return"#"+e.map(s=>r?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=oc.black,t.alpha=0):t.coords=oc[e],t.coords)return t}}}}),M0=new Ie({id:"p3",cssId:"display-p3",name:"P3",base:F0,fromBase:Xn.fromBase,toBase:Xn.toBase});Ge.display_space=Xn;let BE;if(typeof CSS<"u"&&CSS.supports)for(let e of[We,S0,M0]){let t=e.getMinCoords(),r=Cr({space:e,coords:t,alpha:1});if(CSS.supports("color",r)){Ge.display_space=e;break}}function PE(e,{space:t=Ge.display_space,...n}={}){let r=Cr(e,n);if(typeof CSS>"u"||CSS.supports("color",r)||!Ge.display_space)r=new String(r),r.color=e;else{let i=e;if((e.coords.some(Yt)||Yt(e.alpha))&&!(BE??=CSS.supports("color","hsl(none 50% 50%)"))&&(i=Hn(e),i.coords=i.coords.map(ce),i.alpha=ce(i.alpha),r=Cr(i,n),CSS.supports("color",r)))return r=new String(r),r.color=i,r;i=ne(i,t),r=new String(Cr(i,n)),r.color=i}return r}function LE(e,t){return e=q(e),t=q(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((n,r)=>n===t.coords[r])}function Qt(e){return Ue(e,[ge,"y"])}function N0(e,t){Nt(e,[ge,"y"],t)}function IE(e){Object.defineProperty(e.prototype,"luminance",{get(){return Qt(this)},set(t){N0(this,t)}})}var RE=Object.freeze({__proto__:null,getLuminance:Qt,register:IE,setLuminance:N0});function OE(e,t){e=q(e),t=q(t);let n=Math.max(Qt(e),0),r=Math.max(Qt(t),0);return r>n&&([n,r]=[r,n]),(n+.05)/(r+.05)}const _E=.56,VE=.57,UE=.62,WE=.65,lc=.022,qE=1.414,jE=.1,zE=5e-4,GE=1.14,cc=.027,KE=1.14;function fc(e){return e>=lc?e:e+(lc-e)**qE}function Sn(e){let t=e<0?-1:1,n=Math.abs(e);return t*Math.pow(n,2.4)}function ZE(e,t){t=q(t),e=q(e);let n,r,i,s,o,a;t=ne(t,"srgb"),[s,o,a]=t.coords;let u=Sn(s)*.2126729+Sn(o)*.7151522+Sn(a)*.072175;e=ne(e,"srgb"),[s,o,a]=e.coords;let l=Sn(s)*.2126729+Sn(o)*.7151522+Sn(a)*.072175,f=fc(u),c=fc(l),d=c>f;return Math.abs(c-f)<zE?r=0:d?(n=c**_E-f**VE,r=n*GE):(n=c**WE-f**UE,r=n*KE),Math.abs(r)<jE?i=0:r>0?i=r-cc:i=r+cc,i*100}function YE(e,t){e=q(e),t=q(t);let n=Math.max(Qt(e),0),r=Math.max(Qt(t),0);r>n&&([n,r]=[r,n]);let i=n+r;return i===0?0:(n-r)/i}const JE=5e4;function HE(e,t){e=q(e),t=q(t);let n=Math.max(Qt(e),0),r=Math.max(Qt(t),0);return r>n&&([n,r]=[r,n]),r===0?JE:(n-r)/r}function QE(e,t){e=q(e),t=q(t);let n=Ue(e,[We,"l"]),r=Ue(t,[We,"l"]);return Math.abs(n-r)}const XE=216/24389,dc=24/116,Ei=24389/27;let $o=$e.D65;var sa=new B({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:$o,base:ge,fromBase(e){let n=e.map((r,i)=>r/$o[i]).map(r=>r>XE?Math.cbrt(r):(Ei*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>dc?Math.pow(t[0],3):(116*t[0]-16)/Ei,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Ei,t[2]>dc?Math.pow(t[2],3):(116*t[2]-16)/Ei].map((r,i)=>r*$o[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const Co=Math.pow(5,.5)*.5+.5;function eD(e,t){e=q(e),t=q(t);let n=Ue(e,[sa,"l"]),r=Ue(t,[sa,"l"]),i=Math.abs(Math.pow(n,Co)-Math.pow(r,Co)),s=Math.pow(i,1/Co)*Math.SQRT2-40;return s<7.5?0:s}var Ii=Object.freeze({__proto__:null,contrastAPCA:ZE,contrastDeltaPhi:eD,contrastLstar:QE,contrastMichelson:YE,contrastWCAG21:OE,contrastWeber:HE});function tD(e,t,n={}){ei(n)&&(n={algorithm:n});let{algorithm:r,...i}=n;if(!r){let s=Object.keys(Ii).map(o=>o.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=q(e),t=q(t);for(let s in Ii)if("contrast"+r.toLowerCase()===s.toLowerCase())return Ii[s](e,t,i);throw new TypeError(`Unknown contrast algorithm: ${r}`)}function Fs(e){let[t,n,r]=ti(e,ge),i=t+15*n+3*r;return[4*t/i,9*n/i]}function x0(e){let[t,n,r]=ti(e,ge),i=t+n+r;return[t/i,n/i]}function nD(e){Object.defineProperty(e.prototype,"uv",{get(){return Fs(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return x0(this)}})}var rD=Object.freeze({__proto__:null,register:nD,uv:Fs,xy:x0});function yr(e,t,n={}){ei(n)&&(n={method:n});let{method:r=Ge.deltaE,...i}=n;for(let s in Qn)if("deltae"+r.toLowerCase()===s.toLowerCase())return Qn[s](e,t,i);throw new TypeError(`Unknown deltaE method: ${r}`)}function iD(e,t=.25){let r=[B.get("oklch","lch"),"l"];return Nt(e,r,i=>i*(1+t))}function sD(e,t=.25){let r=[B.get("oklch","lch"),"l"];return Nt(e,r,i=>i*(1-t))}var oD=Object.freeze({__proto__:null,darken:sD,lighten:iD});function B0(e,t,n=.5,r={}){return[e,t]=[q(e),q(t)],Zt(n)==="object"&&([n,r]=[.5,n]),ni(e,t,r)(n)}function P0(e,t,n={}){let r;Xa(e)&&([r,n]=[e,t],[e,t]=r.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:s,steps:o=2,maxSteps:a=1e3,...u}=n;r||([e,t]=[q(e),q(t)],r=ni(e,t,u));let l=yr(e,t),f=i>0?Math.max(o,Math.ceil(l/i)+1):o,c=[];if(a!==void 0&&(f=Math.min(f,a)),f===1)c=[{p:.5,color:r(.5)}];else{let d=1/(f-1);c=Array.from({length:f},(p,y)=>{let D=y*d;return{p:D,color:r(D)}})}if(i>0){let d=c.reduce((p,y,D)=>{if(D===0)return 0;let $=yr(y.color,c[D-1].color,s);return Math.max(p,$)},0);for(;d>i;){d=0;for(let p=1;p<c.length&&c.length<a;p++){let y=c[p-1],D=c[p],$=(D.p+y.p)/2,A=r($);d=Math.max(d,yr(A,y.color),yr(A,D.color)),c.splice(p,0,{p:$,color:r($)}),p++}}}return c=c.map(d=>d.color),c}function ni(e,t,n={}){if(Xa(e)){let[u,l]=[e,t];return ni(...u.rangeArgs.colors,{...u.rangeArgs.options,...l})}let{space:r,outputSpace:i,progression:s,premultiplied:o}=n;e=q(e),t=q(t),e=Hn(e),t=Hn(t);let a={colors:[e,t],options:n};if(r?r=B.get(r):r=B.registry[Ge.interpolationSpace]||e.space,i=i?B.get(i):r,e=ne(e,r),t=ne(t,r),e=Ht(e),t=Ht(t),r.coords.h&&r.coords.h.type==="angle"){let u=n.hue=n.hue||"shorter",l=[r,"h"],[f,c]=[Ue(e,l),Ue(t,l)];isNaN(f)&&!isNaN(c)?f=c:isNaN(c)&&!isNaN(f)&&(c=f),[f,c]=_b(u,[f,c]),Nt(e,l,f),Nt(t,l,c)}return o&&(e.coords=e.coords.map(u=>u*e.alpha),t.coords=t.coords.map(u=>u*t.alpha)),Object.assign(u=>{u=s?s(u):u;let l=e.coords.map((d,p)=>{let y=t.coords[p];return Br(d,y,u)}),f=Br(e.alpha,t.alpha,u),c={space:r,coords:l,alpha:f};return o&&(c.coords=c.coords.map(d=>d/f)),i!==r&&(c=ne(c,i)),c},{rangeArgs:a})}function Xa(e){return Zt(e)==="function"&&!!e.rangeArgs}Ge.interpolationSpace="lab";function aD(e){e.defineFunction("mix",B0,{returns:"color"}),e.defineFunction("range",ni,{returns:"function<color>"}),e.defineFunction("steps",P0,{returns:"array<color>"})}var uD=Object.freeze({__proto__:null,isRange:Xa,mix:B0,range:ni,register:aD,steps:P0}),L0=new B({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Xn,fromBase:e=>{let t=Math.max(...e),n=Math.min(...e),[r,i,s]=e,[o,a,u]=[NaN,0,(n+t)/2],l=t-n;if(l!==0){switch(a=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case r:o=(i-s)/l+(i<s?6:0);break;case i:o=(s-r)/l+2;break;case s:o=(r-i)/l+4}o=o*60}return a<0&&(o+=180,a=Math.abs(a)),o>=360&&(o-=360),[o,a*100,u*100]},toBase:e=>{let[t,n,r]=e;t=t%360,t<0&&(t+=360),n/=100,r/=100;function i(s){let o=(s+t/30)%12,a=n*Math.min(r,1-r);return r-a*Math.max(-1,Math.min(o-3,9-o,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),I0=new B({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:L0,fromBase(e){let[t,n,r]=e;n/=100,r/=100;let i=r+n*Math.min(r,1-r);return[t,i===0?0:200*(1-r/i),100*i]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let i=r*(1-n/2);return[t,i===0||i===1?0:(r-i)/Math.min(i,1-i)*100,i*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),lD=new B({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:I0,fromBase(e){let[t,n,r]=e;return[t,r*(100-n)/100,100-r]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let i=n+r;if(i>=1){let a=n/i;return[t,0,a*100]}let s=1-r,o=s===0?0:1-n/s;return[t,o*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const cD=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],fD=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var R0=new Ie({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:cD,fromXYZ_M:fD}),dD=new Ie({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:R0,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const hD=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],mD=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var O0=new Ie({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Ja,toXYZ_M:hD,fromXYZ_M:mD});const pD=1/512,gD=16/512;var wD=new Ie({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:O0,toBase(e){return e.map(t=>t<gD?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=pD?t**(1/1.8):16*t)}}),yD=new B({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Jn,fromBase(e){let[t,n,r]=e,i;const s=2e-4;return Math.abs(n)<s&&Math.abs(r)<s?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),yt(i)]},toBase(e){let[t,n,r]=e,i,s;return isNaN(r)?(i=0,s=0):(i=n*Math.cos(r*Math.PI/180),s=n*Math.sin(r*Math.PI/180)),[t,i,s]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let _0=$e.D65;const bD=216/24389,hc=24389/27,[mc,pc]=Fs({space:ge,coords:_0});var V0=new B({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:_0,base:ge,fromBase(e){let t=[ce(e[0]),ce(e[1]),ce(e[2])],n=t[1],[r,i]=Fs({space:ge,coords:t});if(!Number.isFinite(r)||!Number.isFinite(i))return[0,0,0];let s=n<=bD?hc*n:116*Math.cbrt(n)-16;return[s,13*s*(r-mc),13*s*(i-pc)]},toBase(e){let[t,n,r]=e;if(t===0||Yt(t))return[0,0,0];n=ce(n),r=ce(r);let i=n/(13*t)+mc,s=r/(13*t)+pc,o=t<=8?t/hc:Math.pow((t+16)/116,3);return[o*(9*i/(4*s)),o,o*((12-3*i-20*s)/(4*s))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),eu=new B({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:V0,fromBase(e){let[t,n,r]=e,i;const s=.02;return Math.abs(n)<s&&Math.abs(r)<s?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),yt(i)]},toBase(e){let[t,n,r]=e;return n<0&&(n=0),isNaN(r)&&(r=0),[t,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const ED=216/24389,DD=24389/27,gc=me[0][0],wc=me[0][1],ko=me[0][2],yc=me[1][0],bc=me[1][1],So=me[1][2],Ec=me[2][0],Dc=me[2][1],Fo=me[2][2];function Fn(e,t,n){const r=t/(Math.sin(n)-e*Math.cos(n));return r<0?1/0:r}function Xi(e){const t=Math.pow(e+16,3)/1560896,n=t>ED?t:e/DD,r=n*(284517*gc-94839*ko),i=n*(838422*ko+769860*wc+731718*gc),s=n*(632260*ko-126452*wc),o=n*(284517*yc-94839*So),a=n*(838422*So+769860*bc+731718*yc),u=n*(632260*So-126452*bc),l=n*(284517*Ec-94839*Fo),f=n*(838422*Fo+769860*Dc+731718*Ec),c=n*(632260*Fo-126452*Dc);return{r0s:r/s,r0i:i*e/s,r1s:r/(s+126452),r1i:(i-769860)*e/(s+126452),g0s:o/u,g0i:a*e/u,g1s:o/(u+126452),g1i:(a-769860)*e/(u+126452),b0s:l/c,b0i:f*e/c,b1s:l/(c+126452),b1i:(f-769860)*e/(c+126452)}}function vc(e,t){const n=t/360*Math.PI*2,r=Fn(e.r0s,e.r0i,n),i=Fn(e.r1s,e.r1i,n),s=Fn(e.g0s,e.g0i,n),o=Fn(e.g1s,e.g1i,n),a=Fn(e.b0s,e.b0i,n),u=Fn(e.b1s,e.b1i,n);return Math.min(r,i,s,o,a,u)}var vD=new B({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:eu,gamutSpace:Xn,fromBase(e){let[t,n,r]=[ce(e[0]),ce(e[1]),ce(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let s=Xi(t),o=vc(s,r);i=n/o*100}return[r,i,t]},toBase(e){let[t,n,r]=[ce(e[0]),ce(e[1]),ce(e[2])],i;if(r>99.9999999)r=100,i=0;else if(r<1e-8)r=0,i=0;else{let s=Xi(r);i=vc(s,t)/100*n}return[r,i,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});me[0][0];me[0][1];me[0][2];me[1][0];me[1][1];me[1][2];me[2][0];me[2][1];me[2][2];function Tn(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function Ac(e){let t=Tn(e.r0s,e.r0i),n=Tn(e.r1s,e.r1i),r=Tn(e.g0s,e.g0i),i=Tn(e.g1s,e.g1i),s=Tn(e.b0s,e.b0i),o=Tn(e.b1s,e.b1i);return Math.min(t,n,r,i,s,o)}var AD=new B({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:eu,gamutSpace:"self",fromBase(e){let[t,n,r]=[ce(e[0]),ce(e[1]),ce(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let s=Xi(t),o=Ac(s);i=n/o*100}return[r,i,t]},toBase(e){let[t,n,r]=[ce(e[0]),ce(e[1]),ce(e[2])],i;if(r>99.9999999)r=100,i=0;else if(r<1e-8)r=0,i=0;else{let s=Xi(r);i=Ac(s)/100*n}return[r,i,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const $c=203,Cc=2610/2**14,$D=2**14/2610,CD=2523/2**5,kc=2**5/2523,Sc=3424/2**12,Fc=2413/2**7,Tc=2392/2**7;var kD=new Ie({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:Ss,toBase(e){return e.map(function(t){return(Math.max(t**kc-Sc,0)/(Fc-Tc*t**kc))**$D*1e4/$c})},fromBase(e){return e.map(function(t){let n=Math.max(t*$c/1e4,0),r=Sc+Fc*n**Cc,i=1+Tc*n**Cc;return(r/i)**CD})}});const Mc=.17883277,Nc=.28466892,xc=.55991073,To=3.7743;var SD=new Ie({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Ss,toBase(e){return e.map(function(t){return t<=.5?t**2/3*To:(Math.exp((t-xc)/Mc)+Nc)/12*To})},fromBase(e){return e.map(function(t){return t/=To,t<=1/12?Math.sqrt(3*t):Mc*Math.log(12*t-Nc)+xc})}});const U0={};Jt.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=W0(e.W1,e.W2,e.options.method))});Jt.add("chromatic-adaptation-end",e=>{e.M||(e.M=W0(e.W1,e.W2,e.options.method))});function Ts({id:e,toCone_M:t,fromCone_M:n}){U0[e]=arguments[0]}function W0(e,t,n="Bradford"){let r=U0[n],[i,s,o]=ie(r.toCone_M,e),[a,u,l]=ie(r.toCone_M,t),f=[[a/i,0,0],[0,u/s,0],[0,0,l/o]],c=ie(f,r.toCone_M);return ie(r.fromCone_M,c)}Ts({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});Ts({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});Ts({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});Ts({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign($e,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});$e.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const FD=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],TD=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var q0=new Ie({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:$e.ACES,toXYZ_M:FD,fromXYZ_M:TD});const Di=2**-16,Mo=-.35828683,vi=(Math.log2(65504)+9.72)/17.52;var MD=new Ie({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[Mo,vi],name:"Red"},g:{range:[Mo,vi],name:"Green"},b:{range:[Mo,vi],name:"Blue"}},referred:"scene",base:q0,toBase(e){const t=-.3013698630136986;return e.map(function(n){return n<=t?(2**(n*17.52-9.72)-Di)*2:n<vi?2**(n*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Di)+9.72)/17.52:t<Di?(Math.log2(Di+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),Bc=Object.freeze({__proto__:null,A98RGB:dD,A98RGB_Linear:R0,ACEScc:MD,ACEScg:q0,CAM16_JMh:yE,HCT:Lr,HPLuv:AD,HSL:L0,HSLuv:vD,HSV:I0,HWB:lD,ICTCP:na,JzCzHz:ta,Jzazbz:w0,LCH:Pr,LCHuv:eu,Lab:We,Lab_D65:sa,Luv:V0,OKLCH:yD,OKLab:Jn,P3:M0,P3_Linear:F0,ProPhoto:wD,ProPhoto_Linear:O0,REC_2020:S0,REC_2020_Linear:Ss,REC_2100_HLG:SD,REC_2100_PQ:kD,XYZ_ABS_D65:Ha,XYZ_D50:Ja,XYZ_D65:ge,sRGB:Xn,sRGB_Linear:T0});let X=class Fe{constructor(...t){let n;t.length===1&&(n=q(t[0]));let r,i,s;n?(r=n.space||n.spaceId,i=n.coords,s=n.alpha):[r,i,s]=t,Object.defineProperty(this,"space",{value:B.get(r),writable:!1,enumerable:!0,configurable:!0}),this.coords=i?i.slice():[0,0,0],this.alpha=s>1||s===void 0?1:s<0?0:s;for(let o=0;o<this.coords.length;o++)this.coords[o]==="NaN"&&(this.coords[o]=NaN);for(let o in this.space.coords)Object.defineProperty(this,o,{get:()=>this.get(o),set:a=>this.set(o,a)})}get spaceId(){return this.space.id}clone(){return new Fe(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let n=PE(this,...t);return n.color=new Fe(n.color),n}static get(t,...n){return t instanceof Fe?t:new Fe(t,...n)}static defineFunction(t,n,r=n){let{instance:i=!0,returns:s}=r,o=function(...a){let u=n(...a);if(s==="color")u=Fe.get(u);else if(s==="function<color>"){let l=u;u=function(...f){let c=l(...f);return Fe.get(c)},Object.assign(u,l)}else s==="array<color>"&&(u=u.map(l=>Fe.get(l)));return u};t in Fe||(Fe[t]=o),i&&(Fe.prototype[t]=function(...a){return o(this,...a)})}static defineFunctions(t){for(let n in t)Fe.defineFunction(n,t[n],t[n])}static extend(t){if(t.register)t.register(Fe);else for(let n in t)Fe.defineFunction(n,t[n])}};X.defineFunctions({get:Ue,getAll:ti,set:Nt,setAll:Ya,to:ne,equals:LE,inGamut:yn,toGamut:Ht,distance:g0,toString:Cr});Object.assign(X,{util:Bb,hooks:Jt,WHITES:$e,Space:B,spaces:B.registry,parse:m0,defaults:Ge});for(let e of Object.keys(Bc))B.register(Bc[e]);for(let e in B.registry)oa(e,B.registry[e]);Jt.add("colorspace-init-end",e=>{oa(e.id,e),e.aliases?.forEach(t=>{oa(t,e)})});function oa(e,t){let n=e.replace(/-/g,"_");Object.defineProperty(X.prototype,n,{get(){let r=this.getAll(e);return typeof Proxy>"u"?r:new Proxy(r,{has:(i,s)=>{try{return B.resolveCoord([t,s]),!0}catch{}return Reflect.has(i,s)},get:(i,s,o)=>{if(s&&typeof s!="symbol"&&!(s in i)){let{index:a}=B.resolveCoord([t,s]);if(a>=0)return i[a]}return Reflect.get(i,s,o)},set:(i,s,o,a)=>{if(s&&typeof s!="symbol"&&!(s in i)||s>=0){let{index:u}=B.resolveCoord([t,s]);if(u>=0)return i[u]=o,this.setAll(e,i),!0}return Reflect.set(i,s,o,a)}})},set(r){this.setAll(e,r)},configurable:!0,enumerable:!0})}X.extend(Qn);X.extend({deltaE:yr});Object.assign(X,{deltaEMethods:Qn});X.extend(oD);X.extend({contrast:tD});X.extend(rD);X.extend(RE);X.extend(uD);X.extend(Ii);const ND=Symbol("no update");class No extends sh()("observable-value-update"){}class xD extends oh("observable-destroy"){}class BD{listenTarget=new Yh;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const n=t[0];return n===ND||(t.length===2?t[1]:this.equalityCheck)?.(this.value,n)?!1:(this.value=n,this.listenTarget.dispatch(new No({detail:n})),!0)}listen(t,n){const r=i=>n(i.detail);return this.listenerMap.set(n,r),t&&n(this.value),this.listenTarget.listen(No,r)}removeListener(t){const n=this.listenerMap.get(t);return!!n&&this.listenTarget.removeListener(No,n)}destroy(){this.listenTarget.dispatch(new xD),this.listenTarget.destroy()}listenToEvent(t,n,r){return this.listenTarget.listen(t,n,r)}}function PD(e,t){return Uw(e,t,(n,r)=>E.isFunction(n)&&E.isFunction(r)?!0:E.strictEquals(n,r))}function LD(e,t){const n=t?.constructor,r=e?.constructor?.prototype,i=e?.constructor===n,s=n&&r?r instanceof n:!1;return typeof e==typeof t&&(i||s)}const j0="__vir__shape__definition__key__do__not__use__in__actual__objects";function z0(e){return E.hasKey(e,j0)}var pe;(function(e){e.And="and",e.Class="class",e.Enum="enum",e.Exact="exact",e.IndexedKeys="indexed-keys",e.Or="or",e.Unknown="unknown",e.NumericRange="numeric-range",e.Optional="optional"})(pe||(pe={}));const G0="__vir__shape__specifier__key__do__not__use__in__actual__objects";function ID(...e){return or(e,pe.And)}function RD(...e){return or(e,pe.Enum)}function W(...e){return or(e,pe.Exact)}function tu(...e){return or(e,pe.IndexedKeys)}function xe(...e){return or(e,pe.Or)}function On(e,t){return or([e,t],pe.NumericRange)}function Ms(e){return xt(e,pe.And)}function Ns(e){return xt(e,pe.Class)}function xs(e){return xt(e,pe.Enum)}function Bs(e){return xt(e,pe.Exact)}function Ps(e){return xt(e,pe.IndexedKeys)}function ri(e){return xt(e,pe.Or)}function Ls(e){return xt(e,pe.Unknown)}function K0(e){return xt(e,pe.NumericRange)}function es(e){return xt(e,pe.Optional)}function xt(e,t){const n=ii(e);return!!n&&n.specifierType===t}function or(e,t){return{[G0]:!0,specifierType:t,parts:e}}function pn(e,t,n,r){const i=ii(t);if(i){if(K0(i))return E.isNumber(e)?e>=i.parts[0]&&e<=i.parts[1]:!1;if(Ns(i))return e instanceof i.parts[0];if(Ms(i))return i.parts.every(s=>pn(e,s));if(ri(i))return i.parts.some(s=>pn(e,s));if(Bs(i))return E.isObject(e)?pn(e,i.parts[0]):e===i.parts[0];if(xs(i))return E.hasValue(Object.values(i.parts[0]),e);if(Ps(i))return E.isObject(e)?OD(e,i,!!n)&&ih(e).every(s=>pn(s,i.parts[0].values)):!1;if(Ls(i))return!0}return r?t===e:LD(e,t)}function OD(e,t,n){const r=t.parts[0].required,i=t.parts[0].keys;if(n)if(r){const s=nu(t);return E.isBoolean(s)?s:s.every(o=>J(e).some(a=>pn(a,o,!1,!0)))}else return!0;else return J(e).every(s=>pn(s,i))}function nu(e){const t=e.parts[0].keys,n=ii(t);if(E.isPropertyKey(t))return!0;if(n){if(Ns(n))return!1;if(Ms(n))return!1;if(ri(n)){const r=n.parts.map(i=>nu(tu({...e.parts[0],keys:i})));return r.includes(!1)?!1:r.flat().filter(E.isPropertyKey)}else if(Bs(n)){const r=n.parts.filter(E.isPropertyKey);return r.length!==n.parts.length?!1:r}else{if(xs(n))return Object.values(n.parts[0]);if(Ps(n))return!1;if(Ls(n))return!0}}return!1}function ii(e){if(E.isObject(e)&&E.hasKey(e,G0)){if(!E.hasKey(e,"parts")||!E.isArray(e.parts))throw new Error("Found a shape specifier but its parts are not valid.");if(!E.hasKey(e,"specifierType")||!E.isEnumValue(e.specifierType,pe))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}let Pc=class extends TypeError{name="DefaultValueConstructionError"};const Z0="__vir__literal__specifier__key__do__not__use__in__actual__objects";function _D(e){return E.hasKey(e,Z0)}function VD(e,t){return{checker:t,defaultValue:e,[Z0]:!0}}function aa(e){return Bn(e)}function Bn(e){const t=ii(e);if(_D(e))return e.defaultValue;if(t){if(es(t))return Bn(t.parts[0]);if(K0(t))return t.parts[0];if(Ns(t)){const n=t.parts[0];try{return new n}catch(r){throw new Pc(`Failed to create default value for classShape for class '${n.name}': ${Ce(r)}`)}}else{if(ri(t)||Bs(t))return Bn(t.parts[0]);if(Ms(t))return t.parts.reduce((n,r)=>Object.assign(n,Bn(r)),{});if(xs(t))return t.parts[1]||Object.values(t.parts[0])[0];if(Ps(t)){const n=nu(t);return!t.parts[0].required||E.isBoolean(n)?{}:Object.fromEntries(n.map(r=>[r,Bn(t.parts[0].values)]))}else{if(Ls(t))return t.parts[0]??{};throw new Pc(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}}}return z0(e)?aa(e.shape):e instanceof RegExp?e:E.isArray(e)?e.map(Bn):E.isObject(e)?we(e,(n,r)=>aa(r)):e}function tn(e,t=!1){const n={shape:e,isReadonly:t,get defaultValue(){return aa(e)},[j0]:!0};return Object.defineProperty(n,"runtimeType",{enumerable:!1,configurable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}}),n}let Ze=class extends TypeError{name="ShapeMismatchError"};VD("00000000-0000-0000-0000-000000000000",E.isUuid);function UD(e,t,n={},r=""){try{ht({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!n.allowExtraKeys}})}catch(i){throw r?Gr(i,r):i}}function ua(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function ht({subject:e,shape:t,keys:n,options:r}){if(Ls(t))return!0;if(z0(t))return ht({subject:e,shape:t.shape,keys:n,options:r});const i=ua(n);if(ii(e))throw new Ze(`Shape test subjects cannot be contain shape specifiers but one was found at ${i}.`);if(es(t))return ht({keys:n,options:r,shape:t.parts[0],subject:e});if(pn(e,t,!r.ignoreExtraKeys)){if(E.isFunction(t))return E.isFunction(e);if(Ns(t))return e instanceof t.parts[0];if(e&&typeof e=="object"){const o=e,a=r.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(o).map(f=>[f,!1])),u=[];let l=!1;if(ri(t)){const f=[];l=t.parts.some(c=>{try{const d=ht({subject:e,shape:c,keys:n,options:r});return Object.assign(a,d),!0}catch(d){if(d instanceof Ze)return f.push(d.message),!1;throw d}}),!l&&E.isLengthAtLeast(f,1)&&u.push(f[0])}else if(Ms(t))l=t.parts.every(f=>{try{const c=ht({subject:e,shape:f,keys:n,options:{...r,ignoreExtraKeys:!0}});return Object.assign(a,c),!0}catch(c){if(c instanceof Ze)return u.push(c.message),!1;throw c}});else if(Bs(t)){const f=ht({subject:e,shape:t.parts[0],keys:n,options:{...r,exactValues:!0}});Object.assign(a,f),l=!0}else{if(xs(t))throw new Ze(`Cannot compare an enum specifier to an object at ${i}`);if(E.isArray(t)&&E.isArray(o))l=o.every((f,c)=>{const d=t.some(p=>{try{return ht({subject:f,shape:p,keys:[...n,c],options:r}),!0}catch(y){if(y instanceof Ze)return u.push(y.message),!1;throw y}});return a[c]=d,d});else if(Ps(t)){const f=we(e,(c,d)=>(r.ignoreExtraKeys||ht({shape:t.parts[0].keys,subject:c,keys:[...n,c],options:r}),ht({shape:t.parts[0].values,subject:d,keys:[...n,c],options:r}),!0));Object.assign(a,f),l=!0}else{const f=WD({keys:n,options:r,shape:t,subject:e});Object.assign(a,f),l=!0}}if(u.length)throw new Ze(zr(u));if(!l){const c=`Failed on key(s): ${Object.keys(a).filter(d=>!a[d]).map(d=>ua([...n,d])).join(",")}`;throw new Ze(c)}return r.ignoreExtraKeys||Object.entries(a).forEach(([f,c])=>{if(!c)throw new Ze(`subject as extra key '${f}' in ${i}.`)}),a}else if(r.exactValues)return e===t}else throw new Ze(`Subject does not match shape definition at key ${i}`);return!0}function WD({keys:e,options:t,shape:n,subject:r}){const i=ua(e),s={};if(E.isObject(n)){const o=new Set(J(n)),a=new Set(J(r));o.forEach(u=>{(u in r||es(n[u]))&&a.add(u)}),t.ignoreExtraKeys||a.forEach(u=>{if(!o.has(u))throw new Ze(`Subject has extra key '${String(u)}' in ${i}`)}),o.forEach(u=>{const l=n[u],f=ri(l)?l.parts.includes(void 0):!1,c=l?.includes?.(void 0)||l===void 0;if(!a.has(u)&&!f&&!c)throw new Ze(`Subject missing key '${String(u)}' in ${i}`)}),a.forEach(u=>{if(!(u in r)&&es(n[u])){s[u]=!0;return}const l=r[u];if(t.ignoreExtraKeys&&!o.has(u))return;const f=n[u];ht({subject:l,shape:f,keys:[...e,u],options:t}),s[u]=!0})}else throw new Ze(`Shape definition at ${i} was not an object.`);return s}const qD=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],Y0=qD.reduce((e,t)=>(e[t]=t,e),{});te.defaultZone.name;const J0=Y0.UTC,jD=tn({hour:On(Qu.min,Qu.max),minute:On(Xu.min,Xu.max),second:On(el.min,el.max),millisecond:On(tl.min,tl.max),timezone:RD(Y0,J0)}),zD=tn({year:2023,month:On(Ju.min,Ju.max),day:On(Hu.min,Hu.max),timezone:J0});tn(ID(zD,jD));R.Years+"",R.Quarters+"",R.Months+"",R.Weeks+"",R.Days+"",R.Hours+"",R.Minutes+"",R.Seconds+"",R.Milliseconds+"";tn(xe({get:W(L.Month),in:xe(W(L.Year),W(L.Quarter))},{get:W(L.Week),in:xe(W(L.Year),W(L.Quarter),W(L.Month))},{get:W(L.Day),in:xe(W(L.Year),W(L.Quarter),W(L.Month),W(L.Week))},{get:W(L.Hour),in:xe(W(L.Year),W(L.Quarter),W(L.Month),W(L.Week),W(L.Day))},{get:W(L.Minute),in:xe(W(L.Year),W(L.Quarter),W(L.Month),W(L.Week),W(L.Day),W(L.Hour))},{get:W(L.Second),in:xe(W(L.Year),W(L.Quarter),W(L.Month),W(L.Week),W(L.Day),W(L.Hour),W(L.Minute))},{get:W(L.Millisecond),in:xe(W(L.Year),W(L.Quarter),W(L.Month),W(L.Week),W(L.Day),W(L.Hour),W(L.Minute),W(L.Second))}));var Lc;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(Lc||(Lc={}));var la;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(la||(la={}));var Ic;(function(e){e.Year="year",e.Month="month",e.Day="day"})(Ic||(Ic={}));const GD={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};Ey(GD,$t(la));te.defaultLocale;function KD(e,t){const n=t?.constructor,r=e?.constructor?.prototype,i=e?.constructor===n,s=n&&r?r instanceof n:!1;return typeof e==typeof t&&(i||s)}const H0="__vir__shape__definition__key__do__not__use__in__actual__objects";function Q0(e){return E.hasKey(e,H0)}var Le;(function(e){e.And="and",e.Class="class",e.Enum="enum",e.Exact="exact",e.IndexedKeys="indexed-keys",e.Or="or",e.Unknown="unknown",e.NumericRange="numeric-range",e.Optional="optional"})(Le||(Le={}));const X0="__vir__shape__specifier__key__do__not__use__in__actual__objects";function ZD(...e){return tm(e,Le.IndexedKeys)}function YD(e){return tm([e],Le.Unknown)}function Is(e){return Bt(e,Le.And)}function Rs(e){return Bt(e,Le.Class)}function Os(e){return Bt(e,Le.Enum)}function _s(e){return Bt(e,Le.Exact)}function Vs(e){return Bt(e,Le.IndexedKeys)}function si(e){return Bt(e,Le.Or)}function Us(e){return Bt(e,Le.Unknown)}function em(e){return Bt(e,Le.NumericRange)}function ts(e){return Bt(e,Le.Optional)}function Bt(e,t){const n=oi(e);return!!n&&n.specifierType===t}function tm(e,t){return{[X0]:!0,specifierType:t,parts:e}}function gn(e,t,n,r){const i=oi(t);if(i){if(em(i))return E.isNumber(e)?e>=i.parts[0]&&e<=i.parts[1]:!1;if(Rs(i))return e instanceof i.parts[0];if(Is(i))return i.parts.every(s=>gn(e,s));if(si(i))return i.parts.some(s=>gn(e,s));if(_s(i))return E.isObject(e)?gn(e,i.parts[0]):e===i.parts[0];if(Os(i))return E.hasValue(Object.values(i.parts[0]),e);if(Vs(i))return E.isObject(e)?JD(e,i,!!n)&&ih(e).every(s=>gn(s,i.parts[0].values)):!1;if(Us(i))return!0}return r?t===e:KD(e,t)}function JD(e,t,n){const r=t.parts[0].required,i=t.parts[0].keys;if(n)if(r){const s=ru(t);return E.isBoolean(s)?s:s.every(o=>J(e).some(a=>gn(a,o,!1,!0)))}else return!0;else return J(e).every(s=>gn(s,i))}function ru(e){const t=e.parts[0].keys,n=oi(t);if(E.isPropertyKey(t))return!0;if(n){if(Rs(n))return!1;if(Is(n))return!1;if(si(n)){const r=n.parts.map(i=>ru(ZD({...e.parts[0],keys:i})));return r.includes(!1)?!1:r.flat().filter(E.isPropertyKey)}else if(_s(n)){const r=n.parts.filter(E.isPropertyKey);return r.length!==n.parts.length?!1:r}else{if(Os(n))return Object.values(n.parts[0]);if(Vs(n))return!1;if(Us(n))return!0}}return!1}function oi(e){if(E.isObject(e)&&E.hasKey(e,X0)){if(!E.hasKey(e,"parts")||!E.isArray(e.parts))throw new Error("Found a shape specifier but its parts are not valid.");if(!E.hasKey(e,"specifierType")||!E.isEnumValue(e.specifierType,Le))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}class Rc extends TypeError{name="DefaultValueConstructionError"}function ca(e){return Pn(e)}function Pn(e){const t=oi(e);if(t){if(ts(t))return Pn(t.parts[0]);if(em(t))return t.parts[0];if(Rs(t)){const n=t.parts[0];try{return new n}catch(r){throw new Rc(`Failed to create default value for classShape for class '${n.name}': ${Ce(r)}`)}}else{if(si(t)||_s(t))return Pn(t.parts[0]);if(Is(t))return t.parts.reduce((n,r)=>Object.assign(n,Pn(r)),{});if(Os(t))return Object.values(t.parts[0])[0];if(Vs(t)){const n=ru(t);return!t.parts[0].required||E.isBoolean(n)?{}:Object.fromEntries(n.map(r=>[r,Pn(t.parts[0].values)]))}else{if(Us(t))return t.parts[0]??{};throw new Rc(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}}}return Q0(e)?ca(e.shape):e instanceof RegExp?e:E.isArray(e)?e.map(Pn):E.isObject(e)?we(e,(n,r)=>ca(r)):e}function HD(e,t=!1){const n={shape:e,isReadonly:t,get defaultValue(){return ca(e)},[H0]:!0};return Object.defineProperty(n,"runtimeType",{enumerable:!1,configurable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}}),n}class Ye extends TypeError{name="ShapeMismatchError"}function QD(e,t,n={}){try{return XD(e,t,n),!0}catch{return!1}}function XD(e,t,n={},r=""){try{mt({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!n.allowExtraKeys}})}catch(i){throw r?Gr(i,r):i}}function fa(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function mt({subject:e,shape:t,keys:n,options:r}){if(Us(t))return!0;if(Q0(t))return mt({subject:e,shape:t.shape,keys:n,options:r});const i=fa(n);if(oi(e))throw new Ye(`Shape test subjects cannot be contain shape specifiers but one was found at ${i}.`);if(ts(t))return mt({keys:n,options:r,shape:t.parts[0],subject:e});if(gn(e,t,!r.ignoreExtraKeys)){if(E.isFunction(t))return E.isFunction(e);if(Rs(t))return e instanceof t.parts[0];if(e&&typeof e=="object"){const o=e,a=r.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(o).map(f=>[f,!1])),u=[];let l=!1;if(si(t)){const f=[];l=t.parts.some(c=>{try{const d=mt({subject:e,shape:c,keys:n,options:r});return Object.assign(a,d),!0}catch(d){if(d instanceof Ye)return f.push(d.message),!1;throw d}}),!l&&E.isLengthAtLeast(f,1)&&u.push(f[0])}else if(Is(t))l=t.parts.every(f=>{try{const c=mt({subject:e,shape:f,keys:n,options:{...r,ignoreExtraKeys:!0}});return Object.assign(a,c),!0}catch(c){if(c instanceof Ye)return u.push(c.message),!1;throw c}});else if(_s(t)){const f=mt({subject:e,shape:t.parts[0],keys:n,options:{...r,exactValues:!0}});Object.assign(a,f),l=!0}else{if(Os(t))throw new Ye(`Cannot compare an enum specifier to an object at ${i}`);if(E.isArray(t)&&E.isArray(o))l=o.every((f,c)=>{const d=t.some(p=>{try{return mt({subject:f,shape:p,keys:[...n,c],options:r}),!0}catch(y){if(y instanceof Ye)return u.push(y.message),!1;throw y}});return a[c]=d,d});else if(Vs(t)){const f=we(e,(c,d)=>(r.ignoreExtraKeys||mt({shape:t.parts[0].keys,subject:c,keys:[...n,c],options:r}),mt({shape:t.parts[0].values,subject:d,keys:[...n,c],options:r}),!0));Object.assign(a,f),l=!0}else{const f=ev({keys:n,options:r,shape:t,subject:e});Object.assign(a,f),l=!0}}if(u.length)throw new Ye(zr(u));if(!l){const c=`Failed on key(s): ${Object.keys(a).filter(d=>!a[d]).map(d=>fa([...n,d])).join(",")}`;throw new Ye(c)}return r.ignoreExtraKeys||Object.entries(a).forEach(([f,c])=>{if(!c)throw new Ye(`subject as extra key '${f}' in ${i}.`)}),a}else if(r.exactValues)return e===t}else throw new Ye(`Subject does not match shape definition at key ${i}`);return!0}function ev({keys:e,options:t,shape:n,subject:r}){const i=fa(e),s={};if(E.isObject(n)){const o=new Set(J(n)),a=new Set(J(r));o.forEach(u=>{(u in r||ts(n[u]))&&a.add(u)}),t.ignoreExtraKeys||a.forEach(u=>{if(!o.has(u))throw new Ye(`Subject has extra key '${String(u)}' in ${i}`)}),o.forEach(u=>{const l=n[u],f=si(l)?l.parts.includes(void 0):!1,c=l?.includes?.(void 0)||l===void 0;if(!a.has(u)&&!f&&!c)throw new Ye(`Subject missing key '${String(u)}' in ${i}`)}),a.forEach(u=>{if(!(u in r)&&ts(n[u])){s[u]=!0;return}const l=r[u];if(t.ignoreExtraKeys&&!o.has(u))return;const f=n[u];mt({subject:l,shape:f,keys:[...e,u],options:t}),s[u]=!0})}else throw new Ye(`Shape definition at ${i} was not an object.`);return s}const tv=HD({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:YD()});function xo(e){return QD(e,tv,{allowExtraKeys:!0})}class nm extends BD{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||PD}setValue(t){return super.setValue(t)}listen(t,n){return super.listen(t,n)}removeListener(t){return super.removeListener(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:nv}=Cb,Oc=()=>document.createComment(""),mr=(e,t,n)=>{const r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0){const s=r.insertBefore(Oc(),i),o=r.insertBefore(Oc(),i);n=new nv(s,o,e,e.options)}else{const s=n._$AB.nextSibling,o=n._$AM,a=o!==e;if(a){let u;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(u=e._$AU)!==o._$AU&&n._$AP(u)}if(s!==i||a){let u=n._$AA;for(;u!==s;){const l=u.nextSibling;r.insertBefore(u,i),u=l}}}return n},cn=(e,t,n=e)=>(e._$AI(t,n),e),rv={},iv=(e,t=rv)=>e._$AH=t,sv=e=>e._$AH,Bo=e=>{e._$AP?.(!1,!0);let t=e._$AA;const n=e._$AB.nextSibling;for(;t!==n;){const r=t.nextSibling;t.remove(),t=r}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ws={ATTRIBUTE:1,CHILD:2,ELEMENT:6},nn=e=>(...t)=>({_$litDirective$:e,values:t});class Pt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ov={attribute:!0,type:String,converter:Zi,reflect:!1,hasChanged:ja},av=(e=ov,t,n)=>{const{kind:r,metadata:i}=n;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(n.name,e),r==="accessor"){const{name:o}=n;return{set(a){const u=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,u,e)},init(a){return a!==void 0&&this.P(o,void 0,e),a}}}if(r==="setter"){const{name:o}=n;return function(a){const u=this[o];t.call(this,a),this.requestUpdate(o,u,e)}}throw Error("Unsupported decorator location: "+r)};function uv(e){return(t,n)=>typeof n=="object"?av(e,t,n):((r,i,s)=>{const o=i.hasOwnProperty(s);return i.constructor.createProperty(s,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,n)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ir=nn(class extends Pt{constructor(e){if(super(e),e.type!==Ws.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const n=e.element.classList;for(const r of this.st)r in t||(n.remove(r),this.st.delete(r));for(const r in t){const i=!!t[r];i===this.st.has(r)||this.nt?.has(r)||(i?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return ze}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rm=e=>e??re;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class da extends Pt{constructor(t){if(super(t),this.it=re,t.type!==Ws.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===re||t==null)return this._t=void 0,this.it=t;if(t===ze)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}da.directiveName="unsafeHTML",da.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class _c extends da{}_c.directiveName="unsafeSVG",_c.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function lv(e,t,n){return e?t(e):n?.(e)}class im extends $r{static assign;static assignedInputs;static tagName;static styles;static render;static inputsType;static stateType;static updateStateType;static events;static stateInitStatic;static init;static elementOptions;static hostClasses;static cssVars;static slotNames}function cv(e,t,n){const r=!t.length&&!n.length,i=e.length?!1:!t.filter(a=>!!a.index).length;if(r||i)return[...e];const s=e.map(a=>[a]);return s.length||(s[0]=[]),n.forEach(a=>{a>=0&&a<e.length&&(s[a]=[])}),t.forEach(a=>{const u=s[a.index];u&&u.splice(0,0,...a.values)}),s.flat()}function Ri(e){return E.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function iu(e){return E.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function sm(e){return ps(e,t=>{if(Ri(t))return t.definition;if(iu(t))return t.tagInterpolationKey||t},E.isTruthy)}const om=new WeakMap;function fv(e,t){const n=sm(t);return am(om,[e,...n]).value?.template}function dv(e,t,n){const r=sm(t);return lm(om,[e,...r],n)}function am(e,t,n=0){const{currentTemplateAndNested:r,reason:i}=um(e,t,n);return r?n===t.length-1?{value:r,reason:"reached end of keys array"}:r.nested?am(r.nested,t,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:i}}function um(e,t,n){const r=t[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!e.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const i=e.get(r);return i==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:i,reason:"key and value exists"}}function lm(e,t,n,r=0){const{currentTemplateAndNested:i,currentKey:s,reason:o}=um(e,t,r);if(!s)return{result:!1,reason:o};const a=i??{nested:void 0,template:void 0};if(i||e.set(s,a),r===t.length-1)return a.template=n,{result:!0,reason:"set value at end of keys array"};const u=a.nested??new WeakMap;return a.nested||(a.nested=u),lm(u,t,n,r+1)}function cm(e,t,n){const r=fv(e,t),i=r??n();if(!r){const a=dv(e,t,i);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const s=i.valuesTransform(t),o=cv(t,s.valueInsertions,s.valueIndexDeletions);return{strings:i.templateStrings,values:o}}function fm(e,t,n,r){const i=[],s=[],o=[],a=[];return e.forEach((l,f)=>{const c=i.length-1,d=i[c],p=f-1,y=t[p];r&&r(l);let D,$=[];if(typeof d=="string"&&(D=n(d,l,y),D)){i[c]=[d,D.replacement].join(""),o.push(p);const F=D.getExtraValues;$=F?F(y):[],$.length&&F?(i[c]+=" ",$.forEach((I,_)=>{_&&i.push(" ")}),a.push(I=>{const _=I[p],G=F(_);return{index:p,values:G}}),i.push(l)):i[c]+=l}D||i.push(l);const A=e.raw[f];D?(s[c]=[s[c],D.replacement,A].join(""),$.length&&$.forEach(()=>{s.push("")})):s.push(A)}),{templateStrings:Object.assign([],i,{raw:s}),valuesTransform(l){const f=a.flatMap(c=>c(l));return{valueIndexDeletions:o,valueInsertions:f}}}}function hv(...[e,t,n]){if(iu(n))return{replacement:n.tagName,getExtraValues:void 0}}function mv(e,t){return fm(e,t,hv)}function S(e,...t){const n=cm(e,t,()=>mv(e,t));return Li(n.strings,...n.values)}const pv={ignoreUnsetInputs:!0,allowPolymorphicState:!1};function dm(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const n=t.host;return n instanceof im?!0:dm(n)}function hm(e,t){const n=e.instanceState;J(t).forEach(r=>{if(n&&r in n)throw new Error(`Cannot set input '${String(r)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[r]=t[r]:e[r]=t[r]}),"instanceInputs"in e&&J(e.instanceInputs).forEach(r=>{r in t||(e.instanceInputs[r]=void 0)}),gv(e)}function gv(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function Vc(e,t){const n=[e,"-"].join("");Object.keys(t).forEach(r=>{if(!r.startsWith(n))throw new Error(`Invalid CSS property name '${r}' in '${e}': CSS property names must begin with the element's tag name.`)})}class wv extends CustomEvent{_type="";get type(){return this._type}constructor(t,n){super(typeof t=="string"?t:t.type,{detail:n,bubbles:!0,composed:!0})}}function su(){return e=>class extends wv{static type=e;_type=e;constructor(t){super(e,t)}}}function ct(){return su()}function yv(e,t){return t?Object.keys(t).filter(n=>{if(typeof n!="string")throw new TypeError(`Expected event key of type string but got type '${typeof n}' for key ${String(n)}`);if(n==="")throw new Error("Got empty string for events key.");return!0}).reduce((n,r)=>{const i=su()([e,r].join("-"));return n[r]=i,n},{}):{}}function bv(e){return e?we(e,t=>t):{}}const ns=Symbol("element-vir-state-setup");function Ev(e){return E.isObject(e)?ns in e&&E.isFunction(e[ns]):!1}function mm(e,t){t in e||uv()(e,t)}function Dv(e,t,n){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${n.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${n.toLowerCase()}'.`)}function Uc(e,t){const n=e;function r(o){t?Dv(o,e,e.tagName):mm(e,o)}function i(o,a){return r(a),n[a]}return new Proxy({},{get:i,set(o,a,u){const l=Ev(u)?u[ns]():u;r(a);const f=n[a];function c(p){o[a]=p,n[a]=p}const d=e.observablePropertyListenerMap[a];if(f!==l&&xo(f)&&d&&f.removeListener(d),xo(l))if(d)l.listen(!1,d);else{let p=function(){e.requestUpdate()};e.observablePropertyListenerMap[a]=p,l.listen(!1,p)}else xo(f)&&(e.observablePropertyListenerMap[a]=void 0);return c(l),!0},ownKeys(o){return Reflect.ownKeys(o)},getOwnPropertyDescriptor(o,a){if(a in o)return{get value(){return i(o,a)},configurable:!0,enumerable:!0}},has(o,a){return Reflect.has(o,a)}})}function vv({hostClassNames:e,cssVars:t}){return{hostClasses:we(e,(n,r)=>({name:ue(r),selector:ue(`:host(.${r})`)})),cssVars:t}}function Av({host:e,hostClassesInit:t,hostClassNames:n,state:r,inputs:i}){t&&J(t).forEach(s=>{const o=t[s],a=n[s];typeof o=="function"&&(o({state:r,inputs:i})?e.classList.add(a):e.classList.remove(a))})}function $v({element:e,eventsMap:t,cssVars:n,slotNamesMap:r}){function i(o){J(o).forEach(a=>{const u=o[a];e.instanceState[a]=u})}return{cssVars:n,slotNames:r,dispatch:o=>e.dispatchEvent(o),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:i}}function Cv(e){return e?e.reduce((n,r)=>(n[r]=r,n),{}):{}}function qs(e){const t=e;if(!E.isObject(t))throw new TypeError("Cannot define element with non-object init: ${init}");if(!E.isString(t.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!t.render||typeof t.render=="string")throw new Error(`Failed to define element '${t.tagName}': render is not a function`);const n={...pv,...t.options},r=yv(t.tagName,t.events),i=bv(t.hostClasses);t.hostClasses&&Vc(t.tagName,t.hostClasses),t.cssVars&&Vc(t.tagName,t.cssVars);const s=t.cssVars?en(t.cssVars):{},o=Cv(t.slotNames),a=typeof t.styles=="function"?t.styles(vv({hostClassNames:i,cssVars:s})):t.styles||S``,u=t.render;function l(...[c]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:f,inputs:c}}const f=class extends im{static elementOptions=n;static tagName=t.tagName;static styles=a;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return $v({element:this,eventsMap:r,cssVars:s,slotNamesMap:o})}static assign=l;static events=r;static render=u;static hostClasses=i;static cssVars=s;static init=t;static slotNames=o;static stateInitStatic=t.stateInitStatic;get instanceType(){throw new Error(`"instanceType" was called on ${t.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${t.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${t.tagName} as a value but it is only for types.`)}_initCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;_haveInputsBeenSet=!1;render(){this._internalRenderCount++;try{dm(this)&&!this._haveInputsBeenSet&&!n.ignoreUnsetInputs&&console.warn(this,`${t.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${qs.name}' to define ${t.tagName}.`),this._hasRendered=!0;const c=this.createRenderParams();if(!this._initCalled&&t.init&&(this._initCalled=!0,t.init(c)instanceof Promise))throw new TypeError("init cannot be asynchronous");const d=u(c);if(d instanceof Promise)throw new TypeError("render cannot be asynchronous");return Av({host:c.host,hostClassesInit:t.hostClasses,hostClassNames:i,state:c.state,inputs:c.inputs}),this._lastRenderedProps={inputs:{...c.inputs},state:{...c.state}},d}catch(c){const d=Gr(c,`Failed to render ${t.tagName}`);return console.error(d),this._lastRenderError=d,Ce(d)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&t.init){this._initCalled=!0;const c=this.createRenderParams();if(t.init(c)instanceof Promise)throw new TypeError(`init in '${t.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(c=>{E.hasKey(c,"destroy")&&E.isFunction(c.destroy)&&c.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),t.cleanup){const c=this.createRenderParams();if(t.cleanup(c)instanceof Promise)throw new TypeError(`cleanup in '${t.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1}definition={};assignInputs(c){hm(this,c)}observablePropertyListenerMap={};instanceInputs=Uc(this,!1);instanceState=Uc(this,!n.allowPolymorphicState);constructor(){super();const c=t.stateInitStatic||{};J(c).forEach(d=>{mm(this,d),this.instanceState[d]=c[d]}),this.definition=f}};return Object.defineProperties(f,{name:{value:Cy(t.tagName,{capitalizeFirstLetter:!0}),writable:!0}}),window.customElements.get(t.tagName)?console.warn(`Tried to define custom element '${t.tagName}' but it is already defined.`):window.customElements.define(t.tagName,f),f}function pm(){return e=>{const t=e;if(!E.isObject(t))throw new TypeError("Cannot define element with non-object init: ${init}");return qs({...t,options:{ignoreUnsetInputs:!1,...t.options}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wc=(e,t,n)=>{const r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},kv=nn(class extends Pt{constructor(e){if(super(e),e.type!==Ws.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);const i=[],s=[];let o=0;for(const a of e)i[o]=r?r(a,o):o,s[o]=n(a,o),o++;return{values:s,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){const i=sv(e),{values:s,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,s;const a=this.ut??=[],u=[];let l,f,c=0,d=i.length-1,p=0,y=s.length-1;for(;c<=d&&p<=y;)if(i[c]===null)c++;else if(i[d]===null)d--;else if(a[c]===o[p])u[p]=cn(i[c],s[p]),c++,p++;else if(a[d]===o[y])u[y]=cn(i[d],s[y]),d--,y--;else if(a[c]===o[y])u[y]=cn(i[c],s[y]),mr(e,u[y+1],i[c]),c++,y--;else if(a[d]===o[p])u[p]=cn(i[d],s[p]),mr(e,i[c],i[d]),d--,p++;else if(l===void 0&&(l=Wc(o,p,y),f=Wc(a,c,d)),l.has(a[c]))if(l.has(a[d])){const D=f.get(o[p]),$=D!==void 0?i[D]:null;if($===null){const A=mr(e,i[c]);cn(A,s[p]),u[p]=A}else u[p]=cn($,s[p]),mr(e,i[c],$),i[D]=null;p++}else Bo(i[d]),d--;else Bo(i[c]),c++;for(;p<=y;){const D=mr(e,u[y+1]);cn(D,s[p]),u[p++]=D}for(;c<=d;){const D=i[c++];D!==null&&Bo(D)}return this.ut=o,iv(e,u),ze}}),Sv=kv;function js(e,t){return Rr(e,t),e.element}function Fv(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Rr(e,t){const n=Fv(e),r=n?`: in ${n}`:"";if(e.type!==Ws.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${r}.`);if(!e.element)throw new Error(`${t} directive found no element${r}.`)}function Tv(e){const t=nn(class extends Pt{element;constructor(n){super(n),this.element=js(n,e)}render(n){return this.element.setAttribute(e,n),ze}});return{attributeSelector(n){return`[${e}="${n}"]`},attributeDirective(n){return t(n)},attributeName:e}}function Q(e,t){return Mv(e,t)}const Mv=nn(class extends Pt{element;lastListenerMetaData;constructor(e){super(e),this.element=js(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:n=>this.lastListenerMetaData?.callback(n)}}render(e,t){const n=typeof e=="string"?e:e.type;if(typeof n!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(n)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(n,t)),ze}}),qc="onDomCreated",jc=nn(class extends Pt{element;constructor(e){super(e),Rr(e,qc)}update(e,[t]){Rr(e,qc);const n=e.element;return n!==this.element&&(window.requestAnimationFrame(()=>t(n)),this.element=n),this.render(t)}render(e){}}),Po="onResize",gm=nn(class extends Pt{element;resizeObserver=new ResizeObserver(e=>this.fireCallback(e));callback;constructor(e){super(e),Rr(e,Po)}fireCallback(e){const t=e[0];if(!t)throw console.error(e),new Error(`${Po} observation triggered but the first entry was empty.`);this.callback?.({target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){Rr(e,Po),this.callback=t;const n=e.element,r=this.element;return n!==r&&(this.element=n,r&&this.resizeObserver.unobserve(r),this.resizeObserver.observe(n)),this.render(t)}render(e){}});function Be(e,t,n){return lv(e,()=>t,()=>n)}const{attributeDirective:Nv}=Tv("data-test-id"),br=Nv;J({assign:"",assignedInputs:"",cssVars:"",elementOptions:"",events:"",hostClasses:"",init:"",inputsType:"",render:"",slotNames:"",stateInitStatic:"",stateType:"",styles:"",tagName:"",updateStateType:""});function xv(e){return{[ns]:e}}function wm(e){const{assertInputs:t,transformInputs:n}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(r=>r)};return{defineElement:()=>r=>(t(r),pm()(n(r))),defineElementNoInputs:r=>(t(r),qs(n(r)))}}function Bv(e,t){return Pv(void 0,e)}const Pv=nn(class extends Pt{element;constructor(e){super(e),this.element=js(e,"assign")}render(e,t){return hm(this.element,t),ze}}),Lv={};function Iv(e,t){return t.map((n,r)=>{const i=e[r],s=e[r+1];if(i&&s){const{shouldHaveTagNameHere:o}=ym(i,s);if(o&&E.isString(n))return{tagName:n,tagInterpolationKey:Jd(Lv,n,()=>({tagName:n}))}}return n})}function ym(e,t){const n=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),r=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:n,shouldHaveTagNameHere:n||r}}function Rv(...[e,t,n]){const r=Ri(n)?n.definition:n,{isOpeningTag:i,shouldHaveTagNameHere:s}=ym(e,t),o=iu(r);if(o&&s&&r.tagInterpolationKey)return{replacement:r.tagName,getExtraValues:void 0};if(s&&!o)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:r}),new Error(`Got interpolated tag name but found no tag name on the given value: '${r?.tagName||r?.prototype?.constructor?.name||r?.constructor?.name}'`);if(!s||!o)return;if(i&&r.elementOptions&&!r.elementOptions.ignoreUnsetInputs&&!Ri(n))throw new Error(`Missing inputs for '${r.tagName}'`);return{replacement:r.tagName,getExtraValues(u){const l=Ri(u)?u.inputs:void 0;return[i&&l?Bv(l):void 0].filter(E.isTruthy)}}}function Ov(e){}function _v(e){return fm(e.strings,e.values,Rv,Ov)}function v(e,...t){const n=Iv(e,t),r=yb(e,...n),i=cm(e,n,()=>_v(r));return{...r,strings:i.strings,values:i.values}}function bm(e){return we(e,(t,n)=>n instanceof X?ue(n.toString({format:"hex"})):bm(n))}const Vv="dodgerblue";function ha(e){const t=Math.abs(e.contrast("white","APCA")),n=Math.abs(e.contrast("black","APCA"));return t>n?"white":"black"}function Lo({background:e,foreground:t}){return{background:e??new X(ha(t)),foreground:t??new X(ha(e))}}function Uv(e){return e==="black"?"white":"black"}const Wv={black:{foregroundFaint1:new X("#ccc"),foregroundFaint2:new X("#eee")},white:{foregroundFaint1:new X("#ccc"),foregroundFaint2:new X("#eee")}},qv={black:{backgroundFaint1:new X("#666"),backgroundFaint2:new X("#444")},white:{backgroundFaint1:new X("#ccc"),backgroundFaint2:new X("#fafafa")}};function zc({themeColor:e=Vv,themeStyle:t="light"}={}){const n=new X(e),r=new X(t==="dark"?"black":"white"),i=ha(r),s=new X(i),o={nav:{hover:Lo({background:n.clone().set({"hsl.l":93})}),active:Lo({background:n.clone().set({"hsl.l":90})}),selected:Lo({background:n.clone().set({"hsl.l":85})})},accent:{icon:n.clone().set({"hsl.l":40})},page:{background:r,...qv[Uv(i)],foreground:s,...Wv[i]}};return bm(o)}var kt=(e=>(e.Footer="book-footer",e.NavHeader="book-nav-header",e))(kt||{});async function ma(e=1){const t=new wf;function n(){requestAnimationFrame(()=>{e--,e?n():t.resolve()})}return n(),t.promise}function jv(e){return[...e.children,...e.shadowRoot?.children??[]]}function zv(e){return e.matches(":focus")}function rs(e){if(e instanceof ShadowRoot)return rs(e.host);const t=e.parentNode;if(t)return t instanceof Element?t:rs(t)}function Em(e,t){if(t(e))return e;const n=rs(e);if(n)return Em(n,t)}async function Gv(e){return Kv(e,1)}async function Kv(e,t){return new Promise(n=>{new IntersectionObserver((i,s)=>{ir.isLengthAtLeast(i,1),s.disconnect(),n(i[0].intersectionRatio>=t)}).observe(e)})}function Er(e,t,n={}){const r=n.useOriginalTarget?e.target:e.currentTarget;if(!(r instanceof t)){const i=t.name,s=r?.constructor.name,o=n.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${s}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${s}'.`;throw new Error(o)}return r}function Zv(e){const t=rs(e);return t&&Em(t,n=>globalThis.getComputedStyle(n).overflowY!=="visible")||document.body}const Yv={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},Jv=Object.keys(Yv),Hv={annotation:window.MathMLElement,"annotation-xml":window.MathMLElement,maction:window.MathMLElement,math:window.MathMLElement,merror:window.MathMLElement,mfrac:window.MathMLElement,mi:window.MathMLElement,mmultiscripts:window.MathMLElement,mn:window.MathMLElement,mo:window.MathMLElement,mover:window.MathMLElement,mpadded:window.MathMLElement,mphantom:window.MathMLElement,mprescripts:window.MathMLElement,mroot:window.MathMLElement,mrow:window.MathMLElement,ms:window.MathMLElement,mspace:window.MathMLElement,msqrt:window.MathMLElement,mstyle:window.MathMLElement,msub:window.MathMLElement,msubsup:window.MathMLElement,msup:window.MathMLElement,mtable:window.MathMLElement,mtd:window.MathMLElement,mtext:window.MathMLElement,mtr:window.MathMLElement,munder:window.MathMLElement,munderover:window.MathMLElement,semantics:window.MathMLElement},Qv=Object.keys(Hv),Xv={a:window.SVGAElement,animate:window.SVGAnimateElement,animateMotion:window.SVGAnimateMotionElement,animateTransform:window.SVGAnimateTransformElement,circle:window.SVGCircleElement,clipPath:window.SVGClipPathElement,defs:window.SVGDefsElement,desc:window.SVGDescElement,ellipse:window.SVGEllipseElement,feBlend:window.SVGFEBlendElement,feColorMatrix:window.SVGFEColorMatrixElement,feComponentTransfer:window.SVGFEComponentTransferElement,feComposite:window.SVGFECompositeElement,feConvolveMatrix:window.SVGFEConvolveMatrixElement,feDiffuseLighting:window.SVGFEDiffuseLightingElement,feDisplacementMap:window.SVGFEDisplacementMapElement,feDistantLight:window.SVGFEDistantLightElement,feDropShadow:window.SVGFEDropShadowElement,feFlood:window.SVGFEFloodElement,feFuncA:window.SVGFEFuncAElement,feFuncB:window.SVGFEFuncBElement,feFuncG:window.SVGFEFuncGElement,feFuncR:window.SVGFEFuncRElement,feGaussianBlur:window.SVGFEGaussianBlurElement,feImage:window.SVGFEImageElement,feMerge:window.SVGFEMergeElement,feMergeNode:window.SVGFEMergeNodeElement,feMorphology:window.SVGFEMorphologyElement,feOffset:window.SVGFEOffsetElement,fePointLight:window.SVGFEPointLightElement,feSpecularLighting:window.SVGFESpecularLightingElement,feSpotLight:window.SVGFESpotLightElement,feTile:window.SVGFETileElement,feTurbulence:window.SVGFETurbulenceElement,filter:window.SVGFilterElement,foreignObject:window.SVGForeignObjectElement,g:window.SVGGElement,image:window.SVGImageElement,line:window.SVGLineElement,linearGradient:window.SVGLinearGradientElement,marker:window.SVGMarkerElement,mask:window.SVGMaskElement,metadata:window.SVGMetadataElement,mpath:window.SVGMPathElement,path:window.SVGPathElement,pattern:window.SVGPatternElement,polygon:window.SVGPolygonElement,polyline:window.SVGPolylineElement,radialGradient:window.SVGRadialGradientElement,rect:window.SVGRectElement,script:window.SVGScriptElement,set:window.SVGSetElement,stop:window.SVGStopElement,style:window.SVGStyleElement,svg:window.SVGSVGElement,switch:window.SVGSwitchElement,symbol:window.SVGSymbolElement,text:window.SVGTextElement,textPath:window.SVGTextPathElement,title:window.SVGTitleElement,tspan:window.SVGTSpanElement,use:window.SVGUseElement,view:window.SVGViewElement},e5=Object.keys(Xv);Array.from(new Set([...Jv,...e5,...Qv].sort()));function t5({searchQuery:e,searchIn:t}){const n=t.length,r=e.length;if(r>n)return!1;if(r===n)return e===t;const i=t.toLowerCase(),s=e.toLowerCase();e:for(let o=0,a=0;o<r;o++){const u=s.codePointAt(o);for(;a<n;)if(i.codePointAt(a++)===u)continue e;return!1}return!0}const n5=Hd(32);function Oi(e){return e.join(n5)}function Dm(e){if(!e.length)return[];const t=Oi(e),n=Dm(e.slice(0,-1));return[t,...n]}const r5=["error","errors"];function i5(e){return r5.includes(e)}function s5({flattenedNodes:e,searchQuery:t}){const n={};function r(i){Object.values(i.children).map(o=>(r(o),Oi(o.fullUrlBreadcrumbs))).forEach(o=>n[o]=!0)}return e.forEach(i=>{const s=i.entry.errors.length&&i5(t),o=Oi(i.fullUrlBreadcrumbs);if(t5({searchIn:[i.entry.title,...i.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||s||n[o]){const u=Dm(i.fullUrlBreadcrumbs);r(i),u.forEach(l=>n[l]=!0)}else n[o]=!1}),e.filter(i=>{const s=Oi(i.fullUrlBreadcrumbs),o=n[s];if(!E.isBoolean(o))throw new TypeError(`Failed to find '${i.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return o})}class ou extends Error{name="SpaRouterError"}class Gc extends ou{name="GlobalUrlEventsConsolidationError"}class o5 extends ou{name="SanitizationDepthMaxed"}tn({paths:[""],search:xe(void 0,tu({keys:"",values:[""],required:!1})),hash:xe(void 0,"")});const a5=tn({basePath:xe("",void 0),sanitizeRoute:e=>e,maxListenerCount:xe(1,void 0),disableWarnings:xe(void 0,!1),isPaused:xe(!1,void 0)}),Io="://";function au(...e){const t=e.join("/"),[n,r=""]=t.includes(Io)?t.split(Io):["",t];let i=!1;const s=r.replace(/\/{2,}/g,"/").split("/").reduce((o,a,u,l)=>{if(i)return o;const f=l[u+1];let c=a;const d=f?.startsWith("?"),p=!a.includes("?")&&d,y=f==="?";if(d||p){i=!0;let D=!1;const $=l.slice(u+2).reduce((A,F)=>(F.includes("#")&&(D=!0),D?A.concat(F):[A,F].join("&")),"");c=[a,f,y?Un({value:$,prefix:"&"}):$].join("")}return o.concat(c)},[]);return[n,n?Io:"",s.join("/")].join("")}var Or;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(Or||(Or={}));var _r;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(_r||(_r={}));function Ai(e,t){return e.map(n=>{if(n!=null)return qn(String(n),t)}).filter(n=>n!=null)}function qn(e,t){return t?.encoding===Or.Decode?decodeURIComponent(e):t?.encoding===Or.Encode?encodeURIComponent(e):e}const u5=tn(tu({keys:"",values:[""],required:!0}));function l5(e,t,n){const r=n?.searchParamStrategy===_r.Clear?{}:we(e,(o,a)=>E.isString(a)?[a]:a),i=we(t,(o,a)=>{if(n?.searchParamStrategy===_r.Append){const u=r[o],l=E.isArray(u)?u:[u];if(a){const f=E.isArray(a)?a:[a];return Ai([...l,...f],n)}else return Ai(l,n)}else return E.isArray(a)?Ai(a,n):a?Ai([a],n):void 0});return xa({...r,...i},(o,a)=>!!a)}function vm(e,t){return E.isString(e)&&!e.includes("?")?{}:(E.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(s=>{const[o,...a]=yy(s,"=");return[o,a.length?a.join("="):void 0]}).reduce((s,[o,a])=>{const u=Am({options:t,key:o,value:a}),l=Jd(s,u.key,()=>[]);return a!=null&&l.push(u.value),s},{})}function c5(e){if(e!=null)return E.isArray(e)?[...e]:e===""?[]:[e]}function f5(e,t){const n=ps(Object.entries(e),([r,i])=>{const s=c5(i);return s?.length?s.map(o=>{const a=Am({options:t,key:r,value:o});return[a.key,a.value].join("=")}):[r]},(r,[,i])=>i!=null).flat();return n.length?je({value:n.join("&"),prefix:"?"}):""}function Am({options:e,key:t,value:n}){return{key:qn(t,e),value:qn(String(n),e)}}function $m({hash:e,hostname:t,password:n,pathname:r,port:i,protocol:s,search:o,username:a}){return[s?s+"://":"",a?a+":":"",n?n+"@":"",zs({hostname:t,port:i}),uu({hash:e,pathname:r,search:o})].join("")}function Cm({pathname:e}){const t=Un({value:e,prefix:"/"});return t?t.split("/"):[]}function uu({hash:e,pathname:t,search:n}){return[je({value:t,prefix:"/"}),n?je({value:n,prefix:"?"}):"",e?je({value:e,prefix:"#"}):""].join("")}function zs({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function km({hostname:e,port:t,protocol:n}){return[n,zs({hostname:e,port:t})].filter(E.isTruthy).join("://")}function is(e,t){const n=E.isString(e)?e:e.toString(),r=n.replace(/^[^#]*(?:#|$)/,""),i=r?je({value:qn(r,t),prefix:"#"}):"",s=n.replace(/#[^#]*$/,""),o=s.replace(/^[^?]*(?:\?|$)/,""),a=o?je({value:qn(o,t),prefix:"?"}):"",u=s.replace(/\?[^?]*$/,""),l=u.includes("://")?u.replace(/:\/\/.*$/,""):"",f=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),c=f.replace(/@.*/,""),d=f.replace(/^[^@]*@/,""),p=c!==d,[y,...D]=p?c.split(":").reverse():[],$=D.toReversed().join("").replace(/[/:]/g,"")||"",A=y?.replace(/[/:]/g,"")||"",F=d.replace(/[:/].*/,""),I=d.replace(/^[^/:]*(:|\/|$)/,"$1"),_=Un({value:I.replace(/\/.*/,""),prefix:":"}),G=qn(I.replace(/^[^/]*(?:\/|$)/,"/"),t),ve=zs({hostname:F,port:_}),It=km({hostname:F,port:_,protocol:l}),ke=$m({hash:i,hostname:F,password:A,pathname:G,port:_,protocol:l,search:a,username:$}),Re=vm(a),dt=Cm({pathname:G});return{fullPath:uu({hash:i,pathname:G,search:a}),hash:i,host:ve,hostname:F,href:ke,origin:It,password:A,pathname:G,paths:dt,port:_,protocol:l,search:a,searchParams:Re,username:$}}function d5(e,t,n){const r=E.isString(e)?e:e instanceof URL?e.toString():"",i=E.isString(e)||e instanceof URL?t:e,s=E.isString(e)||e instanceof URL?n:t,o=is(r),a=we(o,(d,p)=>{if(!E.hasKey(i,d))return p;const y=i[d];return E.isNumber(y)?String(y):E.isString(y)?d==="hash"&&y?je({value:y,prefix:"#"}):d==="pathname"?je({value:y,prefix:"/"}):y:p});E.hasKey(i,"paths")&&i.paths&&(a.pathname=au("",...i.paths));const u=E.isString(i.search)?vm(je({value:i.search,prefix:"?"})):Xd(i.search||{}),l=l5(a.searchParams,u,{...s,encoding:Or.None}),f=f5(l,s);return{...a,searchParams:l,search:f,paths:Cm(a),fullPath:uu(a),host:zs(a),origin:km(a),href:$m({...a,search:f})}}const h5=tn({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:u5,hash:"",fullPath:"/",href:"/"});({...h5.defaultValue});const m5=0;function Sm(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==m5)}const Gs="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const p5=globalThis.history.pushState;function Kc(...e){const t=p5.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Gs)),t}const g5=globalThis.history.replaceState;function Zc(...e){const t=g5.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Gs)),t}function w5(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){{if(globalThis.history.pushState===Kc)throw new Gc("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Zc)throw new Gc("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Kc,globalThis.history.replaceState=Zc,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Gs))})}}function Ro(e,t){const n=is(e),r=Un({value:Un({value:n.pathname,prefix:je({value:t||"",prefix:"/"})}),prefix:"/"}),i=r?r.split("/"):[],s=Object.keys(n.searchParams).length?n.searchParams:void 0,o=n.hash?Un({value:n.hash,prefix:"#"}):void 0;return{paths:i,search:s,hash:o}}class y5{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){UD(t,a5),this.params={...t};const n=this.readCurrentRoute();this.innerObservable=new nm({defaultValue:n,equalityCheck:()=>!1}),w5(),this.removeGlobalListener=Jh(globalThis,Gs,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new o5("Looping route sanitization detected; aborting window URL change listener.");const r=Ro(globalThis.location.href,this.params.basePath),i=t.sanitizeRoute(r);E.jsonEquals(r,i)?(this.sanitizationDepth=0,this.innerObservable.setValue(i)):(this.sanitizationDepth++,this.setRoute(i,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:r,to:i}))}),this.setRoute(n,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:au(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(Ro(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const n=Ro(globalThis.location.href,void 0),r={...n,...t},i=this.sanitizeRoute(r),o=this.routeIncludesBasePath(n)&&!this.routeIncludesBasePath(i)&&this.params.basePath?{...i,paths:[this.params.basePath,...i.paths]}:i;return d5(globalThis.location.href,{paths:o.paths,search:o.search,hash:o.hash?je({value:o.hash,prefix:"#"}):"#"},{searchParamStrategy:_r.Clear}).href}setRoute(t,n={}){const r=this.createRouteUrl(t),{fullPath:i}=is(r);return this.params.isPaused||!n.force&&E.jsonEquals(is(globalThis.location.href).fullPath,i)?!1:n.replace?(globalThis.history.replaceState(void 0,"",i),!0):(globalThis.history.pushState(void 0,"",i),!0)}setRouteOnDirectNavigation(t,n){return Sm(n)?(n.preventDefault(),this.setRoute(t)):!1}listen(t,n){const r=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(r&&this.innerObservable.getListenerCount()>=r)throw new ou(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${r}'.`);return this.innerObservable.listen(t,n),()=>this.removeListener(n)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function b5(e){return new y5({basePath:e,sanitizeRoute(t){return{paths:E5(t.paths),hash:void 0,search:void 0}}})}function E5(e){const t=e[0];if(E.isEnumValue(t,it)){if(t===it.Book)return[it.Book,...e.slice(1)];if(t===it.Search)return e[1]?[t,e[1]]:[it.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Zn.paths}const ss=su()("element-book-change-route"),Yc="vira-",{defineElement:D5}=wm({assertInputs:e=>{if(!e.tagName.startsWith(Yc))throw new Error(`Tag name should start with '${Yc}' but got '${e.tagName}'`)}}),Lt=D5,T=en({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"}),v5=X;function A5(e){try{if(!e)throw new Error("invalid empty color");return new v5(e)}catch{throw new Error(`Invalid color: ${m(e)}`)}}function fe({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function Jc(e,t){const n=J(t).map(r=>{const i=t[r],s=A5(i);return`${T[r].name}: ${s.toString()};`}).join(" ");return fe({name:e.name,svgTemplate:v`
            <div style=${n}>${e.svgTemplate}</div>
        `})}const Fm=fe({name:"Check24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),ot=en({"vira-form-input-radius":"8px"}),Ks=S`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,at=en({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),En=en({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":S`calc(${ot["vira-form-input-radius"].value} + 4px)`});function lu({selector:e,elementBorderSize:t,outlineGap:n=2,outlineWidth:r=2}){const i=ue(th(r+n+t));return S`
        ${ue(e)}::after {
            content: '';
            top: calc(${i} * -1);
            left: calc(${i} * -1);
            position: absolute;
            width: calc(100% + calc(${i} * 2));
            height: calc(100% + calc(${i} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${r}px solid ${En["vira-focus-outline-color"].value};
            border-radius: ${En["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const Gt=en({"vira-form-border-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-focus-color":En["vira-focus-outline-color"].value,"vira-form-selection-hover-background-color":"#d2eaff","vira-form-selection-hover-foreground-color":"black"}),$5=S`
    padding: 0;
    margin: 0;
`,zt=S`
    ${$5};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Hc=S`#e2e2e2`,Tm={menuShadow:S`
        filter: drop-shadow(0px 5px 5px ${Hc});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:S`
        filter: drop-shadow(0px -5px 5px ${Hc});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `},Vr=S`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,O=Lt()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>S`
        :host {
            display: inline-block;
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${e["vira-icon-fit-container"].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),Ct=Lt()({tagName:"vira-dropdown-item",hostClasses:{"vira-dropdown-item-selected":({inputs:e})=>e.selected},styles:({hostClasses:e})=>S`
        :host {
            display: flex;
            ${Vr};
        }

        .option {
            pointer-events: none;
            min-height: 24px;
            display: flex;
            align-items: center;
            padding: 8px;
            padding-left: 0;
            text-align: left;
        }

        ${e["vira-dropdown-item-selected"].selector} ${O} {
            opacity: 1;
        }

        /*
            The check icon looks centered when it has a border.
            However, it does not have a border here.
        */
        ${O} {
            transition: opacity
                ${at["vira-interaction-animation-duration"].value};
            opacity: 0;
            margin-top: -4px;
            margin-right: -2px;
            margin-left: 2px;
        }

        .dropdown-wrapper:not(.reverse-direction) .option:last-of-type {
            border-radius: 0 0 ${ot["vira-form-input-radius"].value}
                ${ot["vira-form-input-radius"].value};
        }

        .dropdown-wrapper.reverse-direction .option:first-of-type {
            border-radius: ${ot["vira-form-input-radius"].value}
                ${ot["vira-form-input-radius"].value} 0 0;
        }
    `,render({inputs:e}){return v`
            <div class="option">
                <${O.assign({icon:Fm})}></${O}>
                <slot>${e.label}</slot>
            </div>
        `}}),pa="group";function C5(e,t,n){return[e,t,n].filter(r=>r!==void 0).join(",")||""}function k5(e){const[t,n,r]=e.split(",");return n?{type:"2d",xCord:yl(t),yCord:yl(n),isGroup:r===pa}:{type:"1d",isGroup:t===pa}}function S5(e,t){Object.entries(t).forEach(([n,r])=>{E.isBoolean(r)&&r?e.setAttribute(n,""):E.isBoolean(r)||r==null?e.removeAttribute(n):e.setAttribute(n,String(r))})}const F5=nn(class extends Pt{element;lastKey;constructor(e){super(e),this.element=js(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),ze}}),ga={name:"data-nav"},Ln="nav-activated",wa={js:{click(e){return`${e}.${Ln}`},selected(e){return`${e}:focus`}},css:{click(e){return S`
                ${ue(wa.js.click(e))}
            `},selected(e){return S`
                ${ue(wa.js.selected(e))}
            `}}},T5={activateKeys:["Space","Return","Enter"]};function M5(){Mm=Xd(T5)}let Mm;M5();function Qc(e){return Mm.activateKeys.some(t=>{const n=t.toLowerCase();return n===e.key.toLowerCase()||n===e.code.toLowerCase()})}function N5(e,t){const n=C5(e,t);return F5(`${e}-${t}`,r=>{const i=r.hasAttribute("tabindex")||e===pa?{}:{tabindex:0},s={[ga.name]:n,...i};ir.instanceOf(r,HTMLElement),S5(r,s),r.style.getPropertyValue("cursor")||r.style.setProperty("cursor","pointer"),r.addEventListener("mousemove",o=>{o.target===r&&r.focus()},!0),r.addEventListener("mouseleave",o=>{o.target===r&&r.blur()},!0),r.addEventListener("mousedown",o=>{o.target===r&&r.classList.add(Ln)},!0),r.addEventListener("mouseup",o=>{o.target===r&&r.classList.remove(Ln)},!0),r.addEventListener("blur",()=>{r.classList.remove(Ln)},!0),r.addEventListener("keydown",o=>{o.target===r&&Qc(o)&&r.classList.add(Ln)},!0),r.addEventListener("keyup",o=>{o.target===r&&Qc(o)&&r.classList.remove(Ln)},!0)})}function x5(e,t){return Nm([],e,t)}function Nm(e,t,n){return!t||t.type==="child"?!1:t.type==="1d"?Xc(t.children,t,0,e,n):t.children.some((r,i)=>Xc(r,t,i,e,n))}function Xc(e,t,n,r,i){return e.some((s,o)=>{const a=E.hasKey(t,"isRoot")&&t.isRoot?r:[t,...r];return i(a,s,{x:o,y:n})?!0:Nm(a,s,i)})}function B5(e){return e.toReversed().find(t=>!t.isGroup)}function Ur(e){if(!e)return;let t,n,r;x5(e,(o,a,u)=>zv(a.element)?(t=o,n=a,r=u,!0):!1);const i=t?t[0]||e:void 0,s=t?B5(t)||e:void 0;if(!(!n||!i||!r||!s||!t))return{node:n,parent:i,nonGroupParent:s,ancestors:t}}function Wr(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}function P5(e){if(!e)return{success:!1,reason:"no nav tree"};const t=Ur(e);if(!t)return{success:!1,reason:"no focused node to enter into"};if(t.node.type==="child"||!t.node.children.length)return{success:!1,reason:"no children to enter into"};const n=t.node.type==="1d"?t.node.children[0]:t.node.children[0]?.[0];return n?(Wr(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element}):{success:!1,reason:"failed to find first child to enter into"}}function L5(e){if(!e)return{success:!1,reason:"no nav tree"};const t=Ur(e);if(!t)return{success:!1,reason:"no focused node to exit out of"};const n=t.nonGroupParent;return n.isRoot?{success:!1,reason:"at top level nav already, nothing to exit to"}:(Wr(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element})}function xm(e){const t=[];return jv(e).forEach(n=>{if(!(n instanceof HTMLElement))return;const r=xm(n),i=n.hasAttribute(ga.name)?k5(n.getAttribute(ga.name)||""):void 0;if(!i){t.push(...r);return}t.push({children:r,element:n,navValue:i})}),t}function I5(e){const t=xm(e);return Bm(t)}function Bm(e){if(!E.isLengthAtLeast(e,1))return;const t={type:e[0].navValue.type,children:[],isRoot:!0,isGroup:!1};return e.forEach(n=>{const r=n.children.length?Bm(n.children):void 0;if(n.navValue.isGroup&&!r){const o=new Error("group nav has no children");throw console.error(o,n),o}const i=R5(n,t.children),s=r?{element:n.element,children:r.children,type:r.type,isGroup:n.navValue.isGroup,coords:i}:{element:n.element,type:"child",coords:i,isGroup:!1};if(n.navValue.type==="2d"&&t.type==="2d"){t.children[i.y]||(t.children[i.y]=[]);const o=t.children[i.y];if(ir.isDefined(o),o[i.x])throw new Error(`Parent already has child at ${i.x},${i.y}`);o[i.x]=s}else if(n.navValue.type==="1d"&&t.type==="1d"){if(t.children[i.x])throw new Error(`Parent already has child at ${i.x},${i.y}`);t.children[i.x]=s}else if(t.type!==n.navValue.type){const o=new Error("inconsistent nav dimensionality");throw console.error(o,n),o}}),t}function R5(e,t){if(e.navValue.type==="2d")return{x:e.navValue.xCord,y:e.navValue.yCord};if(e.navValue.type==="1d")return{x:t.length,y:0};throw new Error(`Unexpected node nav type: '${e.navValue.type}'`)}function ef(e,t){return e>t}function tf(e,t){return e<t}var He;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(He||(He={}));function cu(e){const t=e.type==="1d"?e.children[0]:e.children[0]?.[0];if(t)return t.type==="child"?t:t.isGroup?cu(t):t}function nf(e,t,n){if(!e)return{success:!1,reason:"no nav tree"};const r=Ur(e);if(!r){const a=cu(e);return a?(Wr(a.element),{success:!0,wrapped:!1,defaulted:!0,newElement:a.element}):{success:!1,reason:"no default element to focus"}}const{nextNode:i,requiresWrapping:s}=Pm(r.parent,t,r.node),o=n?!0:!s;return i&&o?(Wr(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:s}):i?o?{success:!1,reason:"no conditions matched"}:{success:!1,reason:"wrapping blocked"}:{success:!1,reason:"failed to find node to focus"}}function Pm(e,t,n){if(t===He.Down||t===He.Up){const i=t===He.Down?tf:ef,s=t===He.Down?1:-1,o=e.type==="1d"?0:wo(n.coords.y+s,{min:0,max:e.children.length-1}),a=e.type==="2d"?e.children[o]:void 0,u={x:e.type==="1d"?wo(n.coords.x+s,{min:0,max:e.children.length-1}):a&&n.coords.x>=a.length?a.length-1:n.coords.x,y:o},l=e.type==="1d"?e.children[u.x]:e.children[u.y]?.[u.x],f=e.type==="1d"?i(u.x,n.coords.x):i(u.y,n.coords.y);return{nextNode:l?.element===n.element?void 0:l,requiresWrapping:f}}else{const i=t===He.Right?tf:ef,s=t===He.Right?1:-1,o=e.type==="1d"?e.children:e.children[n.coords.y];ir.isDefined(o,`No current row found at y index: '${n.coords.y}'`);const a={x:wo(n.coords.x+s,{min:0,max:o.length-1}),y:n.coords.y},u=i(a.x,n.coords.x),l=e.type==="1d"?e.children[a.x]:e.children[a.y]?.[a.x];return{nextNode:l?.element===n.element?void 0:l,requiresWrapping:u}}}function O5(e,t,n,r){const i=E.isLengthAtLeast(t.ancestors,2)?t.ancestors[1]:e,s=t.ancestors[0];if(!s)return{success:!1,reason:"no parent to find a pibling from"};const{nextNode:o,requiresWrapping:a}=Pm(i,n,s),u=o?.isGroup?cu(o):o,l=r?!0:!a;return u?l?(Wr(u.element),{success:!0,defaulted:!1,newElement:u.element,wrapped:a}):{success:!1,reason:"wrapping blocked"}:{success:!1,reason:"no node to navigate to"}}class Lm{rootElement;constructor(t){this.rootElement=t}getCurrentlyFocused(){return Ur(this.buildNavTree())}buildNavTree(){return I5(this.rootElement)}navigate({direction:t,allowWrapping:n}){return nf(this.buildNavTree(),t,n)}enterInto(){return P5(this.buildNavTree())}exitOutOf(){return L5(this.buildNavTree())}navigatePibling({allowWrapping:t,direction:n}){const r=this.buildNavTree(),i=Ur(r);return!i||!r?nf(r,n,t):O5(r,i,n,t)}}const _5={option:"dropdown-option"},$i=Lt()({tagName:"vira-dropdown-options",events:{selectionChange:ct()},styles:S`
        :host {
            display: flex;
            flex-direction: column;

            pointer-events: auto;
            width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            border-radius: ${ot["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${Gt["vira-form-background-color"].value};
            border: 1px solid ${Gt["vira-form-border-color"].value};
            color: ${Gt["vira-form-foreground-color"].value};
            ${Tm.menuShadow}
        }

        .dropdown-item {
            background-color: white;
            outline: none;
        }

        ${wa.css.selected(".dropdown-item:not(.disabled)")} {
            background-color: ${Gt["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${Ct} {
            pointer-events: none;
        }

        .dropdown-item.disabled {
            ${Ks};
            pointer-events: auto;
        }
    `,render({inputs:e,dispatch:t,events:n}){const r=e.options.map(i=>{const s=i.template||v`
                    <${Ct.assign({label:i.label,selected:e.selectedOptions.includes(i)})}></${Ct}>
                `;return v`
                <div
                    class="dropdown-item ${Ir({disabled:!!i.disabled})}"
                    ${br(_5.option)}
                    title=${rm(i.hoverText||void 0)}
                    role="option"
                    ${i.disabled?re:N5()}
                    ${Q("mousedown",o=>{o.stopPropagation()})}
                    ${Q("mouseup",o=>{o.stopPropagation(),i.disabled||t(new n.selectionChange(i))})}
                >
                    ${s}
                </div>
            `});return v`
            <slot>${r}</slot>
        `}}),V5=fe({name:"Chat24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
                fill=${T["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Im=fe({name:"ChevronUp24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${T["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${T["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),Rm=fe({name:"CloseX24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${T["vira-icon-fill-color"].value}
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),U5=fe({name:"Commit24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:1.5"
            viewBox="0 0 24 24"
        >
            <circle
                cx="12"
                cy="12"
                r="4"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
                fill=${T["vira-icon-fill-color"].value}
            />
            <path
                d="M12 2v6m0 8v6"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),W5=fe({name:"Document24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m19 9-6-6H5v18h14V9Z"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
                fill=${T["vira-icon-fill-color"].value}
            />
            <path
                d="M13 3v6h6"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),Om=fe({name:"Element16Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),St=fe({name:"Element24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),_m=fe({name:"EyeClosed24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${T["vira-icon-fill-color"].value}
            stroke=${T["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${T["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),Vm=fe({name:"EyeOpen24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${T["vira-icon-fill-color"].value}
            stroke=${T["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${T["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),Um=fe({name:"Loader24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="loader-animated-24-icon"
        >
            <path
                d="M12 8V2M16 12h6M12 16v6M8 12H2M9.17 9.17 4.93 4.93M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"
                fill="none"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),q5=S`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${at["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,qr=fe({name:"LoaderAnimated24Icon",svgTemplate:v`
        <style>
            ${q5}
        </style>
        ${Um.svgTemplate}
    `}),fu=fe({name:"Options24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${T["vira-icon-fill-color"].value}
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),j5=fe({name:"Pencil24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M20.041 4.966c.303-.418.097-1.085-.459-1.489l-1.771-1.285c-.557-.404-1.255-.393-1.558.025L5.12 17.561l-.167 4.215 3.955-1.467S19.965 5.071 20.041 4.966"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
                fill=${T["vira-icon-fill-color"].value}
            />
            <path
                d="m5.384 17.197 3.788 2.749m5.97-16.198 3.788 2.749"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),z5=fe({name:"Shield24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 21s-8-3.5-8-10V6s4.8-.1 8-3c3.2 2.9 8 3 8 3v5c0 6.5-8 10-8 10Z"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
                fill=${T["vira-icon-fill-color"].value}
            />
        </svg>
    `}),G5=fe({name:"Star24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
        >
            <path
                d="m12 2 2.25 6.91h7.26l-5.88 4.27 2.25 6.91L12 15.82l-5.88 4.27 2.25-6.91-5.88-4.27h7.27L12 2Z"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
                fill=${T["vira-icon-fill-color"].value}
            />
        </svg>
    `}),os=fe({name:"StatusFailure24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${T["vira-icon-fill-color"].value}
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),K5=fe({name:"StatusInProgress24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${T["vira-icon-fill-color"].value}
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${T["vira-icon-stroke-color"].value}
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width="calc(${T["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${T["vira-icon-stroke-color"].value}
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width="calc(${T["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${T["vira-icon-stroke-color"].value}
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width="calc(${T["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),Z5=fe({name:"StatusSuccess24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${T["vira-icon-fill-color"].value}
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),ya={Chat24Icon:V5,Check24Icon:Fm,ChevronUp24Icon:Im,CloseX24Icon:Rm,Commit24Icon:U5,Document24Icon:W5,Element16Icon:Om,Element24Icon:St,EyeClosed24Icon:_m,EyeOpen24Icon:Vm,Loader24Icon:Um,LoaderAnimated24Icon:qr,Options24Icon:fu,Pencil24Icon:j5,Shield24Icon:z5,Star24Icon:G5,StatusFailure24Icon:os,StatusInProgress24Icon:K5,StatusSuccess24Icon:Z5};class Y5 extends nm{constructor(){super({defaultValue:document.hidden,equalityCheck:E.strictEquals}),globalThis.addEventListener("visibilitychange",n=>this.updateVisibility(n));const t=n=>this.updateVisibility(n);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t){const n=H5.includes(t.type),r=J5.includes(t.type),i=n?!0:r?!1:document.hasFocus()||!document.hidden;this.setValue(i)}}const J5=["blur","focusout","pagehide"],H5=["focus","focusin","pageshow"],Q5=new Y5;function X5(e,t){return Q5.listen(e,t)}const rf={top:0,left:0,right:0,bottom:0};class Wm extends oh("hide-pop-up"){}class qm extends sh()("nav-select"){}class eA{listenTarget=new Yh;options={minDownSpace:200,verticalDiffThreshold:20,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;constructor(t){this.options={...this.options,...t}}attachGlobalListeners(t){const n=new Lm(t);this.cleanupCallbacks=[X5(!1,r=>{r||this.removePopUp()}),Cl("mousedown",r=>{this.lastRootElement&&r.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Cl("keydown",r=>{const i=r.code;if(i==="Escape")this.removePopUp();else if(this.options.supportNavigation){if(i==="ArrowDown")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:He.Down,allowWrapping:!1});else if(i==="ArrowUp")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:He.Up,allowWrapping:!1});else if(i==="ArrowLeft")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:He.Left,allowWrapping:!1});else if(i==="ArrowRight")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:He.Right,allowWrapping:!1});else if(i==="Enter"||i==="Return"){const s=n.getCurrentlyFocused();s&&(n.enterInto(),this.listenTarget.dispatch(new qm({detail:s.node.coords})),r.stopImmediatePropagation(),r.preventDefault())}}})]}listen(t,n,r){return this.listenTarget.listen(t,n,r)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new Wm)}showPopUp(t,n){this.lastRootElement=t;const r={...this.options,...n},i=Zv(t);ir.instanceOf(i,HTMLElement);const s=t.getBoundingClientRect(),o=i.getBoundingClientRect(),a=i.offsetWidth-i.clientWidth,u=i.offsetHeight-i.clientHeight,l=i===document.body?{top:0,left:0,right:globalThis.innerWidth,bottom:globalThis.innerHeight}:{top:o.top,left:o.left,right:o.right-a,bottom:o.bottom-u},f=we(rf,p=>s[p]),c=we(rf,p=>{const y=l[p],D=f[p];return Math.abs(y-D)}),d=c.top>c.bottom+r.verticalDiffThreshold&&c.bottom<r.minDownSpace;return this.attachGlobalListeners(t),{popDown:!d,positions:{container:l,root:f,diff:c}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}function tA({selected:e,options:t,isMultiSelect:n}){if(e.length&&t.length){const r=t.filter(i=>e.includes(i.id));return r.length>1&&!n?(console.error("vira-dropdown has multiple selections but `isMultiSelect` is not `true`. Truncating to the first selection."),r.slice(0,1)):r}else return[]}function nA(e){const t=new Set,n=[];if(e.forEach(r=>{t.has(r.id)?n.push(r.id):t.add(r.id)}),n.length)throw new Error(`Duplicate option ids were given to ViraDropdown: ${Sy(n)}`)}function sf(e,t,n){return n?t.includes(e)?t.filter(r=>r!==e):[...t,e]:[e]}function of({open:e,emitEvent:t},{updateState:n,popUpManager:r,dispatch:i,host:s}){e?n({showPopUpResult:r.showPopUp(s)}):r.removePopUp(),t&&i(e)}const Ci={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix",options:"dropdown-options"},Dr=Lt()({tagName:"vira-dropdown",hostClasses:{"vira-dropdown-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>S`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            ${En["vira-focus-outline-color"].name}: ${Gt["vira-form-focus-color"].value};
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${zt};
            max-width: 100%;
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            border-radius: ${ot["vira-form-input-radius"].value};
            transition: border-radius
                ${at["vira-interaction-animation-duration"].value};
            outline: none;
        }

        ${lu({selector:".dropdown-wrapper:focus",elementBorderSize:1})}

        .selection-display {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .trigger-icon {
            transform: rotate(180deg);
            transition: ${at["vira-interaction-animation-duration"].value}
                linear transform;
            align-self: flex-start;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }

        .dropdown-wrapper.open .trigger-icon {
            transform: rotate(0);
        }

        .dropdown-wrapper.open:not(.open-upwards) {
            border-bottom-left-radius: 0;
        }

        .open-upwards.dropdown-wrapper.open {
            border-top-left-radius: 0;
        }

        .dropdown-trigger {
            border: 1px solid ${Gt["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            transition: inherit;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            ${Vr};
            border-radius: inherit;
            background-color: ${Gt["vira-form-background-color"].value};
            color: ${Gt["vira-form-foreground-color"].value};
        }

        .open-upwards ${$i} {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            ${Tm.menuShadowReversed}
        }

        ${e["vira-dropdown-disabled"].selector} {
            ${Ks}
            pointer-events: auto;
        }

        ${e["vira-dropdown-disabled"].selector} .dropdown-wrapper {
            pointer-events: none;
        }

        .pop-up-positioner {
            position: absolute;
            pointer-events: none;
            display: flex;
            flex-direction: column;

            /* highest possible z-index */
            z-index: 2147483647;
            /* space for the caret icon */
            right: 28px;
            /* minus the border width */
            top: calc(100% - 1px);
            left: 0;
        }

        .using-placeholder {
            opacity: 0.4;
        }

        .open-upwards .pop-up-positioner {
            flex-direction: column-reverse;
            /* minus the border width */
            bottom: calc(100% - 1px);
        }
    `,events:{selectedChange:ct(),openChange:ct()},stateInitStatic:{showPopUpResult:void 0,popUpManager:xv(()=>new eA),navController:void 0},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:n,inputs:r,dispatch:i,events:s}){e.popUpManager.listen(Wm,()=>{if(t({showPopUpResult:void 0}),!r.isDisabled){const o=n.shadowRoot.querySelector(".dropdown-wrapper");ir.instanceOf(o,HTMLButtonElement,"failed to find dropdown wrapper child"),o.focus()}}),e.popUpManager.listen(qm,o=>{const a=o.detail.x,u=r.options[a];if(!u)throw new Error(`Found no dropdown option at index '${a}'`);r.isMultiSelect||of({emitEvent:!0,open:!1},{dispatch:l=>{i(new s.openChange(l))},host:n,popUpManager:e.popUpManager,updateState:t}),i(new s.selectedChange(sf(u.id,r.selected,!!r.isMultiSelect)))}),t({navController:new Lm(n)})},render({dispatch:e,events:t,state:n,inputs:r,updateState:i,host:s}){nA(r.options);function o(y){of(y,{dispatch:D=>{e(new t.openChange(D))},host:s,popUpManager:n.popUpManager,updateState:i})}r.isDisabled?o({open:!1,emitEvent:!1}):r.z_debug_forceOpenState!=null&&(!r.z_debug_forceOpenState&&n.showPopUpResult?o({emitEvent:!1,open:!1}):r.z_debug_forceOpenState&&!n.showPopUpResult&&o({emitEvent:!1,open:!0}));const a=tA(r),u=r.icon?v`
                  <${O.assign({icon:r.icon})}
                      ${br(Ci.icon)}
                  ></${O}>
              `:"",l=n.showPopUpResult?n.showPopUpResult.popDown?S`
                      bottom: -${n.showPopUpResult.positions.diff.bottom}px;
                  `:S`
                      top: -${n.showPopUpResult.positions.diff.top}px;
                  `:void 0;function f(){o({emitEvent:!0,open:!n.showPopUpResult})}const c=!a.length,d=r.selectionPrefix&&!c?v`
                      <span class="selected-label-prefix" ${br(Ci.prefix)}>
                          ${r.selectionPrefix}
                      </span>
                  `:"",p=c?r.placeholder||"":a.map(y=>y.label).join(", ");return v`
            <button
                ?disabled=${!!r.isDisabled}
                class="dropdown-wrapper ${Ir({open:!!n.showPopUpResult,"open-upwards":!n.showPopUpResult?.popDown})}"
                ${br(Ci.trigger)}
                role="listbox"
                aria-expanded=${!!n.showPopUpResult}
                ${Q("keydown",y=>{!n.showPopUpResult&&y.code.startsWith("Arrow")&&o({emitEvent:!0,open:!0})})}
                ${Q("click",y=>{y.detail===0&&f()})}
                ${Q("mousedown",y=>{y.button===0&&f()})}
            >
                <div class="dropdown-trigger">
                    ${u}
                    <span
                        class="selection-display ${Ir({"using-placeholder":c})}"
                        title=${rm(c?p:void 0)}
                    >
                        ${d} ${p}
                    </span>
                    <span class="trigger-icon-wrapper">
                        <${O.assign({icon:Im})}
                            class="trigger-icon"
                        ></${O}>
                    </span>
                </div>
                <div class="pop-up-positioner" style=${l}>
                    ${Be(!!n.showPopUpResult,v`
                            <${$i.assign({options:r.options,selectedOptions:a})}
                                ${Q($i.events.selectionChange,y=>{r.isMultiSelect||o({emitEvent:!0,open:!1}),e(new t.selectedChange(sf(y.detail.id,r.selected,!!r.isMultiSelect)))})}
                                ${br(Ci.options)}
                            ></${$i}>
                        `)}
                </div>
            </button>
        `}});var jm=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(jm||{});const de=Lt()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>S`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Vr};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${En["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
        }

        :host(:hover) button,
        button:hover {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-active-color"].value};
        }

        ${e["vira-button-disabled"].selector} {
            ${Ks};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${zt};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${ot["vira-form-input-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${at["vira-interaction-animation-duration"].value},
                background-color
                    ${at["vira-interaction-animation-duration"].value},
                border-color ${at["vira-interaction-animation-duration"].value};
        }

        ${lu({selector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${O} + .text-template {
            margin-left: 8px;
        }
    `,render:({inputs:e})=>{const t=e.icon?v`
                  <${O.assign({icon:e.icon})}></${O}>
              `:"",n=e.text?v`
                  <span class="text-template">${e.text}</span>
              `:"";return v`
            <button ?disabled=${e.disabled}>${t} ${n}</button>
        `}}),Dt=Lt()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},slotNames:["header"],styles:({hostClasses:e})=>S`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${zt};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${at["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:ct()},stateInitStatic:{contentHeight:0},render({state:e,slotNames:t,updateState:n,dispatch:r,events:i,inputs:s}){const o=s.expanded?S`
                  height: ${e.contentHeight}px;
              `:S`
                  height: 0;
              `;return v`
            <button
                class="header-wrapper"
                ${Q("click",()=>{r(new i.expandChange(!s.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${o} disabled="disabled">
                <div
                    ${gm(({contentRect:a})=>{n({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),_t=Lt()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:ct(),imageError:ct()},styles:({hostClasses:e})=>S`
        :host {
            display: inline-flex;
            overflow: hidden;
            flex-direction: column;
            justify-content: center;
            position: relative;
            border-radius: inherit;
            min-height: 100px;
            min-width: 100px;
        }

        img {
            width: 100%;
            height: auto;
            flex-shrink: 0;
        }
        ${e["vira-image-height-constrained"].selector} {
            flex-direction: row;
        }

        ${e["vira-image-height-constrained"].selector} img {
            width: auto;
            height: 100%;
        }

        .status-wrapper {
            overflow: hidden;
            border-radius: inherit;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .error {
            color: red;
        }

        .hidden {
            display: none;
        }
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},render({inputs:e,state:t,updateState:n,dispatch:r,events:i,slotNames:s}){const o=e.imageUrl,a=t.erroredUrls[o]?v`
                  <slot class="status-wrapper" name=${s.error}>
                      <${O.assign({icon:os})} class="error"></${O}>
                  </slot>
              `:t.loadedUrls[o]?void 0:v`
                    <slot class="status-wrapper" name=${s.loading}>
                        <${O.assign({icon:qr})}></${O}>
                    </slot>
                `;return v`
            ${Be(!!a,a)}
            <img
                class=${Ir({hidden:!!a})}
                ${Q("load",async()=>{e._debugLoadDelay&&await Fr(e._debugLoadDelay),n({loadedUrls:{...t.loadedUrls,[o]:!0}}),r(new i.imageLoad)})}
                ${Q("error",async u=>{e._debugLoadDelay&&await Fr(e._debugLoadDelay),n({erroredUrls:{...t.erroredUrls,[o]:!0}}),r(new i.imageError(u.error))})}
                src=${o}
            />
        `}});function ba({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(n=>ba({input:n,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function rA({value:e,allowed:t,blocked:n}){const r=t?ba({input:e,matcher:t}):!0,i=n?ba({input:e,matcher:n}):!1;return r&&!i}function Ea(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:n}=e.value.split("").reduce((r,i)=>(rA({...e,value:i})?r.filtered.push(i):r.blocked.push(i),r),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}function iA({inputs:e,previousValue:t,event:n,inputBlockedCallback:r,newValueCallback:i}){if(!(n instanceof InputEvent))throw new TypeError("Text input event was not an InputEvent.");const s=Er(n,HTMLInputElement),o=n.data;if(o){const{blocked:u}=Ea({value:o,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&r(u)}const a=Ea({value:s.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;s.value!==a&&(s.value=a),t!==a&&i(a)}var zm=(e=>(e.Default="text",e.Password="password",e.Email="email",e))(zm||{});const se=Lt()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-background-color":"white","vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":En["vira-focus-outline-color"].default,"vira-input-text-selection-color":"#cfe9ff","vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:ct(),inputBlocked:ct()},styles:({hostClasses:e,cssVars:t})=>S`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${En["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Ks};
            }

            ${e["vira-input-fit-text"].selector} {
                width: unset;
            }
            ${e["vira-input-fit-text"].selector} input {
                flex-grow: 0;
            }
            ${e["vira-input-fit-text"].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${e["vira-input-fit-text"].selector} .size-span {
                ${zt};
                font-family: inherit;
                display: inline-block;
                font-size: inherit;
                line-height: inherit;
                box-sizing: border-box;
                position: absolute;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                z-index: -1;
                width: min-content;
                ${Vr};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${zt};
                font: inherit;
                /*
                    Leave at least a few pixels for the cursor bar when there is no text at all.
                    This also accounts for a weird Safari <input> behavior where the text moves
                    around if it's not given a tiny bit of padding.
                */
                padding-left: 2px;
                display: block;
            }

            .border-style {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: ${ot["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${at["vira-interaction-animation-duration"].value};
            }

            label {
                ${zt};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${ot["vira-form-input-radius"].value};
                background-color: ${t["vira-input-background-color"].value};
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${lu({selector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${zt};
                cursor: text;
                margin: ${t["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
            }

            ::selection {
                background: ${t["vira-input-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${t["vira-input-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${t["vira-input-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${Vr};
            }

            button {
                ${zt};
                cursor: pointer;
                display: flex;
                transition: color
                    ${at["vira-interaction-animation-duration"].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${t["vira-input-action-button-color"].value};
            }

            .clear-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .clear-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }

            .show-password-button:hover {
                color: ${t["vira-input-show-password-button-hover-color"].value};
            }

            .show-password-button:active {
                color: ${t["vira-input-show-password-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0,showPassword:!1},render:({inputs:e,dispatch:t,state:n,updateState:r,events:i})=>{const{filtered:s}=Ea({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?v`
                  <${O.assign({icon:e.icon})} class="left-side-icon"></${O}>
              `:"",a=e.fitText?S`
                  width: ${n.forcedInputWidth}px;
              `:"",u=e.disableBrowserHelps||e.type==="password";return v`
            <label>
                ${o}
                ${Be(!!e.fitText,v`
                        <span
                            class="size-span"
                            ${gm(({contentRect:l})=>{r({forcedInputWidth:l.width})})}
                        >
                            <pre>${s||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    type=${sA(e.type,n.showPassword)}
                    style=${a}
                    autocomplete=${u?"off":""}
                    autocorrect=${u?"off":""}
                    autocapitalize=${u?"off":""}
                    spellcheck=${u?"false":""}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${Q("input",l=>{iA({inputs:e,previousValue:s,event:l,inputBlockedCallback(f){t(new i.inputBlocked(f))},newValueCallback(f){t(new i.valueChange(f))}})})}
                    placeholder=${e.placeholder}
                />
                ${Be(!!(e.showClearButton&&e.value),v`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${Q("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new i.valueChange(""))})}
                        >
                            <${O.assign({icon:Rm})}></${O}>
                        </button>
                    `)}
                ${Be(e.type==="password",v`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${Q("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),r({showPassword:!n.showPassword})})}
                        >
                            <${O.assign({icon:n.showPassword?Vm:_m})}></${O}>
                        </button>
                    `)}
                ${Be(!!e.suffix,v`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});function sA(e,t){return e==="password"&&t?"text":e||"text"}const ki=Lt()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>S`
        :host {
            display: inline;
            text-decoration: underline;
        }

        a,
        a:visited,
        a:active,
        a:link,
        a:hover {
            color: inherit;
            text-decoration: inherit;
            white-space: inherit;
        }

        :host(:hover) a,
        a:hover,
        :host(:active) a,
        a:active {
            color: ${e["vira-link-hover-color"].value};
        }
    `,render({inputs:e}){function t(n){e.route&&e.route.router.setRouteOnDirectNavigation(e.route.route,n)&&e.route.scrollToTop&&window.scrollTo(0,0)}if(e.link?.newTab)return v`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const n=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return v`
                <a href=${n} rel="noopener noreferrer" ${Q("click",t)}>
                    <slot></slot>
                </a>
            `}}}),{defineElement:tt}=wm(),Qe=tt()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>S`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,render:({inputs:e,dispatch:t})=>{const n=e.router?.createRouteUrl({...e.route})??"#";return v`
            <a
                href=${n}
                ${Q("click",r=>{(!e.router||Sm(r))&&(r.preventDefault(),window.scrollTo(0,0),t(new ss(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function oA(e,t){return e.entry.entryType===De.Root?!1:e.entry.entryType===De.Page||E.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:E.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const At=tt()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>S`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${Z["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${Z["element-book-nav-hover-background-color"].value};
            color: ${Z["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${Z["element-book-nav-active-background-color"].value};
            color: ${Z["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${Qe.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${Z["element-book-nav-selected-background-color"].value};
            color: ${Z["element-book-nav-selected-foreground-color"].value};
            pointer-events: none;
        }

        .title-text {
            white-space: nowrap;
            padding: 1px 0;
            text-overflow: ellipsis;
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 16px;
        }

        ${O} {
            display: inline-flex;
            color: ${Z["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){const t=e.flattenedNodes.map(n=>{if(!oA(n,e.selectedPath))return;const r=S`
                --book-nav-internal-indent: ${n.fullUrlBreadcrumbs.length-1};
            `;return v`
                <li style=${r}>
                    <${Qe.assign({router:e.router,route:{paths:[it.Book,...n.fullUrlBreadcrumbs]}})}
                        class=${Ir({"title-row":!0,selected:e.selectedPath?E.jsonEquals(e.selectedPath,n.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Be(Wn(n,De.ElementExample),v`
                                    <${O.assign({icon:Om})}></${O}>
                                `)}
                            ${n.entry.title}
                        </div>
                    </${Qe}>
                </li>
            `});return v`
            <${Qe.assign({route:Zn,router:e.router})}>
                <slot name=${kt.NavHeader}>Book</slot>
            </${Qe}>
            <ul>
                ${t}
            </ul>
        `}});async function aA(e){await ma(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await Gv(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const Xt=tt()({tagName:"book-error",styles:S`
        :host {
            display: flex;
            flex-direction: column;
            color: red;
            font-weight: bold;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,render({inputs:e}){return(E.isArray(e.message)?e.message:[e.message]).map(n=>v`
                <p>${n}</p>
            `)}}),jr=tt()({tagName:"book-page-controls",events:{controlValueChange:ct()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>S`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${Z["element-book-page-foreground-faint-level-1-color"].value};
        }

        ${e["book-page-controls-has-controls"].selector} {
            margin-top: 8px;
        }

        .control-wrapper {
            position: relative;
            display: flex;
            gap: 4px;
            flex-direction: column;
        }

        .error {
            font-weight: bold;
            color: red;
        }

        ${se} {
            height: 24px;
            max-width: 128px;
        }

        ${O}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:n}){return Object.entries(e.config).length?Object.entries(e.config).map(([r,i],s)=>{if(i.controlType===Y.Hidden)return"";const o=uA(e.currentValues[r],i,a=>{const u=E.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[r];if(!u)throw new Error(`Failed to find breadcrumbs from given control name: '${r}'`);t(new n.controlValueChange({fullUrlBreadcrumbs:u,newValues:{...e.currentValues,[r]:a}}))});return v`
                    <div class="control-wrapper">
                        ${Be(s===0,v`
                                <${O.assign({icon:fu})}
                                    class="options-icon"
                                ></${O}>
                            `)}
                        <label class="control-wrapper">
                            <span>${r}</span>
                            ${o}
                        </label>
                    </div>
                `}):""}});function uA(e,t,n){return Cn(t,Y.Hidden)?"":Cn(t,Y.Checkbox)?v`
            <input
                type="checkbox"
                .value=${e}
                ${Q("input",r=>{const i=Er(r,HTMLInputElement);n(i.checked)})}
            />
        `:Cn(t,Y.Color)?v`
            <input
                type="color"
                .value=${e}
                ${Q("input",r=>{const i=Er(r,HTMLInputElement);n(i.value)})}
            />
        `:Cn(t,Y.Text)?v`
            <${se.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${Q(se.events.valueChange,r=>{n(r.detail)})}
            ></${se}>
        `:Cn(t,Y.Number)?v`
            <input
                type="number"
                .value=${e}
                ${Q("input",r=>{const i=Er(r,HTMLInputElement);n(i.value)})}
            />
        `:Cn(t,Y.Dropdown)?v`
            <select
                .value=${e}
                ${Q("input",r=>{const i=Er(r,HTMLSelectElement);n(i.value)})}
            >
                ${t.options.map(r=>v`
                        <option ?selected=${r===e} value=${r}>
                            ${r}
                        </option>
                    `)}
            </select>
        `:v`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const af=tt()({tagName:"book-breadcrumbs",styles:S`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,render:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((n,r,i)=>{const s=r>=i.length-1,o=i.slice(0,r+1),a=s?"":v`
                      <span class="spacer">&gt;</span>
                  `;return v`
                <${Qe.assign({route:{hash:void 0,search:void 0,paths:[it.Book,...o]},router:e.router})}>
                    ${n}
                </${Qe}>
                ${a}
            `}):v`
                &nbsp;
            `}}),Oo=tt()({tagName:"book-breadcrumbs-bar",styles:S`
        :host {
            border-bottom: 1px solid
                ${Z["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${Z["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return v`
            ${Be(!!e.currentSearch,v`
                    &nbsp;
                `,v`
                    <${af.assign({currentRoute:e.currentRoute,router:e.router})}></${af}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${Q("input",async n=>{const r=n.currentTarget;if(!(r instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const i=r.value;await Fr({milliseconds:200}),r.value===i&&(r.value?t(new ss({paths:[it.Search,encodeURIComponent(r.value)]})):t(new ss(Zn)))})}
            />
        `}}),uf=tt()({tagName:"book-entry-description",styles:S`
        :host {
            color: ${Z["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${Z["element-book-page-foreground-color"].value};
        }

        p {
            margin: 0;
            padding: 0;
        }

        p:first-child {
            margin-top: 8px;
        }
    `,render({inputs:e}){return e.descriptionParagraphs.map(t=>v`
                <p>${t}</p>
            `)}}),lf=tt()({tagName:"book-page-wrapper",styles:S`
        :host {
            display: block;
        }

        h2,
        h3 {
            margin: 0;
            padding: 0;
            font-size: 1.5em;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .page-header .title-group {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
        }

        ${Qe} {
            display: inline-block;
        }
    `,render({inputs:e}){const t=e.isTopLevel?v`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:v`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,n=[it.Book,...e.pageNode.fullUrlBreadcrumbs],r=e.pageNode.entry.errors.length?Qd(e.pageNode.entry.errors):void 0;return r&&console.error(r),v`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${Qe.assign({route:{paths:n,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${Qe}>
                    ${r?v`
                              <${Xt.assign({message:r.message})}></${Xt}>
                          `:v`
                              <${uf.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${uf}>
                              <${jr.assign({config:e.pageNode.entry.controls,currentValues:Va(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${jr}>
                          `}
                </div>
            </div>
        `}}),Si=tt()({tagName:"book-element-example-controls",styles:S`
        :host {
            display: flex;
            color: ${Z["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){const t=[it.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return v`
            <${Qe.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${Qe}>
        `}}),cf=Symbol("unset-internal-state"),ff=tt()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:cf},render({state:e,inputs:t,updateState:n}){try{if(t.elementExampleNode.entry.errors.length)throw Qd(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===cf&&n({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const r=t.elementExampleNode.entry.render({state:e,updateState:n,controls:t.currentPageControls});if(r instanceof Promise)throw new TypeError("render output cannot be a promise");return v`
                ${Be(!!t.elementExampleNode.entry.styles,v`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${r}
            `}catch(r){return console.error("ERROR HERE",Ce(r)),console.error(r),v`
                <${Xt.assign({message:`${t.elementExampleNode.entry.title} failed: ${Ce(r)}`})}></${Xt}>
            `}},options:{allowPolymorphicState:!0}}),df=tt()({tagName:"book-element-example-wrapper",styles:S`
        :host {
            display: inline-flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        .examples-wrapper {
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
        }

        .error {
            color: red;
            font-weight: bold;
        }

        .individual-example-wrapper {
            display: flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        ${Si} {
            color: ${Z["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Si} {
            color: ${Z["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return v`
            <div class="individual-example-wrapper">
                <${Si.assign(by(e,["currentPageControls"]))}></${Si}>
                <${ff.assign(e)}></${ff}>
            </div>
        `}});function Gm(e,t,n,r){const i=Jo(n,r),s=[];if(i){const o=Gm(e,t,i,r);o&&s.push(o)}if(Wn(n,De.Page)&&!e.includes(n)){const o=Va(t,n.fullUrlBreadcrumbs);s.push({config:n.entry.controls,current:o,breadcrumbs:we(o,()=>n.fullUrlBreadcrumbs)})}return s.reduce((o,a)=>({config:{...o.config,...a.config},current:{...o.current,...a.current},breadcrumbs:{...o.breadcrumbs,...a.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function lA({currentNodes:e,isTopLevel:t,router:n,isSearching:r,controls:i,originalTree:s}){if(!e.length&&r)return[v`
                No results
            `];const o=E.isLengthAtLeast(e,1)?Gm(e,i,e[0],s):void 0,a=o&&Object.values(o.config).length&&E.isLengthAtLeast(e,1)?v`
                  <${jr.assign({config:o.config,currentValues:o.current,fullUrlBreadcrumbs:o.breadcrumbs})}></${jr}>
              `:re,u=Sv(e,l=>l.fullUrlBreadcrumbs.join(">"),l=>{if(Wn(l,De.Page))return v`
                    <${lf.assign({isTopLevel:t,pageNode:l,controls:i,router:n})}
                        class="block-entry"
                    ></${lf}>
                `;if(Wn(l,De.ElementExample)){const f=Va(i,l.fullUrlBreadcrumbs.slice(0,-1));return v`
                    <${df.assign({elementExampleNode:l,currentPageControls:f,router:n})}
                        class="inline-entry"
                    ></${df}>
                `}else return Wn(l,De.Root)?re:v`
                    <${Xt.assign({message:`Unknown entry type for rendering: '${l.entry.entryType}'`})}
                        class="block-entry"
                    ></${Xt}>
                `});return[a,u]}const Mn=tt()({tagName:"book-entry-display",styles:S`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .all-book-entries-wrapper {
            flex-grow: 1;
            padding: 32px;
        }

        .inline-entry {
            margin: 8px;
        }

        * + .block-entry {
            margin-top: 32px;
        }

        .block-entry + * {
            margin-top: 32px;
        }

        h1 {
            margin: 0;
            padding: 0;
        }

        ${Oo} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${at["vira-interaction-animation-duration"].value} forwards;
            z-index: 100;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }

        @keyframes fade-in {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `,events:{loadingRender:ct()},stateInitStatic:{lastElement:void 0},render:({inputs:e,dispatch:t,events:n,state:r,updateState:i})=>{const s=Ho(e.currentRoute.paths),o=lA({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!s,controls:e.controls,originalTree:e.originalTree});return v`
            <${Oo.assign({currentSearch:s,currentRoute:e.currentRoute,router:e.router})}></${Oo}>

            ${Be(e.showLoading,v`
                    <div
                        ${jc(()=>{t(new n.loadingRender(!0))})}
                        class="loading"
                    >
                        <${O.assign({icon:qr})}></${O}>
                    </div>
                    ${Be(!!r.lastElement,v`
                            ${r.lastElement}
                            <slot name=${kt.Footer}></slot>
                        `)}
                `,v`
                    <div
                        ${jc(a=>{i({lastElement:a})})}
                        class="all-book-entries-wrapper"
                    >
                        ${o}
                    </div>
                    <slot name=${kt.Footer}></slot>
                `)}
        `}});function cA(e,t,n){const r=hf(e,t);return r.length?r:(n(Zn),hf(e,Zn.paths))}function hf(e,t){return e.filter(n=>Q2({searchFor:t.slice(1),searchIn:n.fullUrlBreadcrumbs}))}const _o=pm()({tagName:"element-book-app",events:{pathUpdate:ct()},stateInitStatic:{currentRoute:Zn,router:void 0,loading:!0,colors:{config:void 0,theme:zc(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:S`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${Z["element-book-page-background-color"].value};
            color: ${Z["element-book-page-foreground-color"].value};
        }

        .error {
            color: red;
        }

        .root {
            flex-grow: 1;
            width: 100%;
            display: flex;
            position: relative;
        }

        ${Mn} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${At} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,init({host:e,state:t}){setTimeout(async()=>{await mf(e,Ho(t.currentRoute.paths),t.currentRoute)},500)},cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:n,updateState:r,dispatch:i,events:s})=>{t._debug&&console.info("rendering element-book app");function o(f){return{...e.currentRoute,...f}}function a(f){const c=o(f);return!E.jsonEquals(e.currentRoute,c)}function u(f){t.preventWindowTitleChange||(e.originalWindowTitle||r({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,f].filter(E.isTruthy).join(" - "))}function l(f){if(!a(f))return;const c=o(f);e.router?e.router.setRoute(c):r({currentRoute:{...e.currentRoute,...c}}),t.elementBookRoutePaths&&!E.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&i(new s.pathUpdate(c.paths))}try{if(t.elementBookRoutePaths&&!E.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&l({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const A=b5(t.internalRouterConfig.basePath);r({router:A}),A.listen(!0,F=>{r({currentRoute:F})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const f={themeColor:t.themeColor};if(!E.jsonEquals(f,e.colors.config)){const A=zc(f);r({colors:{config:f,theme:A}}),Nb(n,A)}const c=t._debug??!1,d=rb({entries:t.pages,debug:c});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),r({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:e0(d.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const p=Ho(e.currentRoute.paths),D=(p?s5({flattenedNodes:d.flattenedNodes,searchQuery:p}):void 0)??cA(d.flattenedNodes,e.currentRoute.paths,l);u(D[0]?.entry.title);const $=e.treeBasedControls?.controls;return $?(t._debug&&console.info({currentControls:$}),v`
                <div
                    class="root"
                    ${Q(ss,async A=>{const F=A.detail;if(!a(F))return;if(r({loading:!0}),l(F),!(n.shadowRoot.querySelector(At.tagName)instanceof At))throw new TypeError(`Failed to find child '${At.tagName}'`);await mf(n,p,e.currentRoute)})}
                    ${Q(jr.events.controlValueChange,A=>{if(!e.treeBasedControls)return;const F=sb($,A.detail.fullUrlBreadcrumbs,A.detail.newValues);r({treeBasedControls:{...e.treeBasedControls,controls:F}})})}
                >
                    <${At.assign({flattenedNodes:d.flattenedNodes,router:e.router,selectedPath:p?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${kt.NavHeader}
                            slot=${kt.NavHeader}
                        ></slot>
                    </${At}>
                    <${Mn.assign({controls:$,currentNodes:D,currentRoute:e.currentRoute,debug:c,originalTree:d.tree,router:e.router,showLoading:e.loading})}
                        ${Q(Mn.events.loadingRender,async A=>{await ma();const F=n.shadowRoot.querySelector(Mn.tagName);F?F.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Mn.tagName}' for scrolling.`),await ma(),r({loading:!A.detail})})}
                    >
                        <slot
                            name=${kt.Footer}
                            slot=${kt.Footer}
                        ></slot>
                    </${Mn}>
                </div>
            `):v`
                    <${Xt.assign({message:"Failed to generate page controls."})}></${Xt}>
                `}catch(f){return console.error(f),v`
                <p class="error">${Ce(f)}</p>
            `}}});async function mf(e,t,n){if(t||n.paths.length<=1)return;const r=e.shadowRoot.querySelector(At.tagName);if(!(r instanceof At))throw new TypeError(`Failed to find child '${At.tagName}'`);await aA(r)}const rn=ft({title:"Elements",parent:void 0}),du=ft({parent:rn,title:"Dropdown"}),fA=[{title:"unselected",inputs:{label:"my label",selected:!1}},{title:"selected",inputs:{label:"my label",selected:!0}},{title:"with custom child",inputs:{label:"custom child",selected:!0},customTemplate:v`
            <b>This is custom</b>
        `},{title:"constrained width",customStyle:S`
            :host {
                max-width: 100px;
            }
        `,inputs:{label:"has more text than is possible to fit",selected:!0}},{title:"stretched width",customStyle:S`
            ${Ct} {
                width: 400px;
            }
        `,inputs:{label:"wide",selected:!0}}],dA=ft({title:Ct.tagName,parent:du,controls:{Selected:{controlType:Y.Dropdown,initValue:"",options:["","all","none"]},Label:{controlType:Y.Text,initValue:""}},defineExamples({defineExample:e}){fA.forEach(t=>{e({title:t.title,stateInitStatic:{selected:t.inputs.selected||[]},styles:t.customStyle,render({controls:n}){const r={label:n.Label||t.inputs.label,selected:n.Selected?n.Selected==="all":t.inputs.selected};return t.customTemplate?v`
                            <${Ct.assign(r)}>
                                ${t.customTemplate}
                            </${Ct}>
                        `:v`
                            <${Ct.assign(r)}></${Ct}>
                        `}})})}}),kr=[{label:"Option 1",id:1},{label:"Option 2",id:2},{label:"Option 3",id:3},{label:"Really really super duper long option",id:4},{label:"Really really super duper long option",id:5},{label:"Really really super duper long option",id:6},{label:"Really really super duper long option",id:7},{label:"Really really super duper long it just keeps going because it's so long option",id:8}],hA=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{id:"1",label:"1"},{id:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with custom template",inputs:{selected:[],options:[...kr,{id:42,label:"custom template",template:v`
                        <select>
                            <option selected>NESTED SELECT!!!</option>
                            <option>this is a terrible idea</option>
                            <option>pls don't do this</option>
                        </select>
                    `}]}},{title:"with disabled item",inputs:{selected:[],options:[...kr,{id:42,label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:S`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:S`
            ${Dr} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:St}}],mA=ft({title:Dr.tagName,parent:du,controls:{Selected:{controlType:Y.Dropdown,initValue:"",options:["",...kr.map(e=>e.label)]},Prefix:{controlType:Y.Text,initValue:""},"Force State":{controlType:Y.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:Y.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:Y.Dropdown,initValue:"",options:["",...Object.keys(ya)]},Disabled:{controlType:Y.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:Y.Text,initValue:"Select something"}},defineExamples({defineExample:e}){hA.forEach(t=>{e({title:t.title,stateInitStatic:{selected:t.inputs?.selected||[]},styles:t.customStyle,render({state:n,updateState:r,controls:i}){const s={placeholder:t.inputs&&"placeholder"in t.inputs?t.inputs.placeholder:i.Placeholder,options:t.inputs?.options||kr,selected:i.Selected?[kr.find(o=>o.label===i.Selected)?.id].filter(E.isTruthy):n.selected,selectionPrefix:i.Prefix||t.inputs?.selectionPrefix,isDisabled:i.Disabled?i.Disabled==="all":t.inputs?.isDisabled,icon:i.Icon?ya[i.Icon]:t.inputs?.icon,isMultiSelect:i["Multi Select"]?i["Multi Select"]==="all":t.inputs?.isMultiSelect,z_debug_forceOpenState:i["Force State"]?i["Force State"]==="force open":t.inputs?.z_debug_forceOpenState};return v`
                        <${Dr.assign(s)}
                            ${Q(Dr.events.selectedChange,o=>{r({selected:o.detail})})}
                        ></${Dr}>
                    `}})})}}),pA=ft({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:Y.Color,initValue:""},"Fill Color":{controlType:Y.Color,initValue:""},"Stroke Width":{controlType:Y.Number,initValue:1}},defineExamples({defineExample:e}){Object.values(ya).forEach(t=>{e({title:t.name,styles:S`
                    :host(:hover) ${O} {
                        background-color: #f2f2f2;
                    }

                    ${O} {
                        padding: 8px;
                        border-radius: ${ot["vira-form-input-radius"].value};
                    }
                `,render({controls:n}){const r=S`
                        ${T["vira-icon-fill-color"].name}: ${ue(n["Fill Color"]||"inherit")};
                        ${T["vira-icon-stroke-color"].name}: ${ue(n["Stroke Color"]||"inherit")};
                        ${T["vira-icon-stroke-width"].name}: ${ue(n["Stroke Width"]?th(n["Stroke Width"]):"inherit")};
                    `;return v`
                        <${O.assign({icon:t})} style=${r}></${O}>
                    `}})})}}),gA=ft({parent:rn,title:de.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:Y.Color,initValue:de.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:Y.Color,initValue:de.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:Y.Color,initValue:de.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:Y.Color,initValue:de.cssVars["vira-button-primary-active-color"].default}},defineExamples({defineExample:e}){function t({title:n,styles:r,inputs:i}){const s=r??S``;e({title:n,styles:s,render({controls:o}){const a=S`
                        ${de.cssVars["vira-button-primary-color"].name}: ${ue(o["Primary color"]||"inherit")};
                        ${de.cssVars["vira-button-secondary-color"].name}: ${ue(o["Secondary color"]||"inherit")};
                        ${de.cssVars["vira-button-primary-hover-color"].name}: ${ue(o["Hover color"]||"inherit")};
                        ${de.cssVars["vira-button-primary-active-color"].name}: ${ue(o["Active color"]||"inherit")};
                    `;return v`
                        <${de.assign({text:"hello",...i})}
                            style=${a}
                        ></${de}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:fu}}),t({title:"outline",inputs:{buttonStyle:jm.Outline}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:S`
                ${de} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:S`
                ${de} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:S`
                :host {
                    ${de.cssVars["vira-button-primary-color"].name}: pink;
                    ${de.cssVars["vira-button-secondary-color"].name}: purple;
                    ${de.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${de.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,render(){return v`
                    <${de.assign({text:"hello"})}></${de}>
                `}})}}),wA=ft({title:Dt.tagName,parent:rn,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:S`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},render({updateState:t,state:n}){return new Array(3).fill(0).map((r,i)=>v`
                        <${Dt.assign({expanded:!!n.expandedStates[i]})}
                            ${Q(Dt.events.expandChange,s=>{const o=[...n.expandedStates];o[i]=s.detail,t({expandedStates:o})})}
                        >
                            <div
                                class="section-header"
                                slot=${Dt.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${Q("click",()=>{const s=[...n.showMoreStates];s[i]=!s[i],t({showMoreStates:s})})}
                            >
                                show more
                            </button>
                            ${Be(!!n.showMoreStates[i],v`
                                    <p>Variable contents</p>
                                    <p>Variable contents</p>
                                `)}
                            <p>Variable contents</p>
                        </${Dt}>
                    `)}}),e({title:"wider examples",styles:S`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},render({updateState:t,state:n}){return new Array(3).fill(0).map((r,i)=>v`
                        <${Dt.assign({expanded:!!n.expandedStates[i]})}
                            ${Q(Dt.events.expandChange,s=>{const o=[...n.expandedStates];o[i]=s.detail,t({expandedStates:o})})}
                        >
                            <div
                                class="section-header"
                                slot=${Dt.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                            <button
                                ${Q("click",()=>{const s=[...n.showMoreStates];s[i]=!s[i],t({showMoreStates:s})})}
                            >
                                show more
                            </button>
                            ${Be(!!n.showMoreStates[i],v`
                                    <p>
                                        Variable contents Variable contents Variable contents
                                        Variable contents Variable contents Variable contents
                                    </p>
                                    <p>
                                        Variable contents Variable contents Variable contents
                                        Variable contents Variable contents Variable contents
                                    </p>
                                `)}
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                        </${Dt}>
                    `)}})}}),yA=ft({title:O.tagName,parent:rn,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return v`
                    <${O.assign({icon:St})}></${O}>
                `}}),e({title:"using createColoredIcon",render(){return v`
                    <${O.assign({icon:Jc(St,{"vira-icon-stroke-color":"red"})})}></${O}>
                `}}),e({title:"fit container",styles:S`
                ${O} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return v`
                    <${O.assign({icon:Jc(St,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${O}>
                `}})}}),bA=ft({title:_t.tagName,parent:rn,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/element-vir/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:S`
                    border-radius: 32px;
                `,loadingSlot:v`
                    <div
                        style=${S`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${O.assign({icon:qr,fitContainer:!0})}
                            style=${S`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${O}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:S`
                    border-radius: 32px;
                `,errorSlot:v`
                    <div
                        style=${S`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${O.assign({icon:os,fitContainer:!0})}
                            style=${S`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${O}>
                    </div>
                `},{title:"disproportionate dimensions",inputs:{imageUrl:"/element-vir/vira/bolt.png"},styles:S`
                    width: 25px;
                    height: 200px;
                `},{title:"dominant height",inputs:{imageUrl:"/element-vir/vira/bolt.png",dominantDimension:"height"},styles:S`
                    width: 25px;
                    height: 200px;
                `},{title:"long loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:2e3}},styles:S`
                    border-radius: 32px;
                `,allowReload:!0,loadingSlot:v`
                    <div
                        style=${S`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${O.assign({icon:qr,fitContainer:!0})}
                            style=${S`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${O}>
                    </div>
                `,errorSlot:v`
                    <div
                        style=${S`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${O.assign({icon:os,fitContainer:!0})}
                            style=${S`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${O}>
                    </div>
                `}].forEach(n=>{e({title:n.title,styles:S`
                    ${_t} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${n.styles||S``}
                    }

                    ${n.allowReload?S`
                              ${_t} {
                                  cursor: pointer;
                              }

                              ${_t}:hover {
                                  border-color: #0055ff;
                              }
                          `:S``}

                    .slot-wrapper {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `,stateInitStatic:{imageUrl:n.inputs.imageUrl},render({state:r,updateState:i}){return v`
                        <${_t.assign({...n.inputs,imageUrl:r.imageUrl})}
                            ${Q("click",()=>{n.allowReload&&i({imageUrl:`${n.inputs.imageUrl}?di=${Hd()}`})})}
                        >
                            ${n.loadingSlot?v`
                                      <div class="slot-wrapper" slot=${_t.slotNames.loading}>
                                          ${n.loadingSlot}
                                      </div>
                                  `:""}${n.errorSlot?v`
                                      <div class="slot-wrapper" slot=${_t.slotNames.error}>
                                          ${n.errorSlot}
                                      </div>
                                  `:""}
                        </${_t}>
                    `}})})}}),EA=ft({title:se.tagName,parent:rn,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:Y.Color,initValue:se.cssVars["vira-input-text-color"].default},"Placeholder color":{controlType:Y.Color,initValue:se.cssVars["vira-input-placeholder-color"].default},"Border color":{controlType:Y.Color,initValue:se.cssVars["vira-input-border-color"].default},"Focus color":{controlType:Y.Color,initValue:se.cssVars["vira-input-focus-border-color"].default},"Selection color":{controlType:Y.Color,initValue:se.cssVars["vira-input-text-selection-color"].default}},defineExamples({defineExample:e}){function t({styles:r,title:i,inputs:s}){e({title:i,styles:S`
                    ${r||S``}
                `,stateInitStatic:{value:s.value},render({state:o,updateState:a,controls:u}){const l={[String(se.cssVars["vira-input-text-color"].name)]:u["Text color"],[String(se.cssVars["vira-input-placeholder-color"].name)]:u["Placeholder color"],[String(se.cssVars["vira-input-border-color"].name)]:u["Border color"],[String(se.cssVars["vira-input-focus-border-color"].name)]:u["Focus color"],[String(se.cssVars["vira-input-text-selection-color"].name)]:u["Selection color"]},f=we(l,(d,p)=>p||"inherit"),c=Object.entries(f).map(([d,p])=>[d,p].join(": ")+";").join(`
`);return v`
                        <${se.assign({...s,value:o.value})}
                            style=${c}
                            ${Q(se.events.valueChange,d=>{a({value:d.detail})})}
                        ></${se}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:St}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:S`
                    ${se} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:St}},{title:"taller height",styles:S`
                    ${se} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:St}},{title:"shorter height",styles:S`
                    ${se} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:St}},{title:"max width",styles:S`
                    ${se} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:S`
                    ${se} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:zm.Password}}].forEach(t)}}),DA=ft({title:ki.tagName,parent:rn,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:Y.Color,initValue:""},"Hover color":{controlType:Y.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:n,inputs:r}){e({title:n,render({controls:i}){const s=S`
                        ${ki.cssVars["vira-link-hover-color"].name}: ${ue(i["Hover color"]||"inherit")};
                        color: ${ue(i["CSS Color"]||"inherit")};
                    `;return v`
                        <${ki.assign(r)} style=${s}>My Link</${ki}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(n,r){return console.info(n,r),!1}}}}})}}),vA=[rn,pA,du,gA,wA,dA,mA,yA,bA,EA,DA].sort((e,t)=>e.title.localeCompare(t.title));qs({tagName:"vira-book-app",styles:S`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${_o} {
            height: 100%;
            width: 100%;
        }

        h1 {
            margin: 0;
            margin-bottom: 16px;
            padding: 0;
            margin-left: 16px;
        }
    `,render(){return v`
            <${_o.assign({internalRouterConfig:{basePath:au("element-vir","vira"),useInternalRouter:!0},pages:vA,themeColor:"#33ccff"})}>
                <h1 slot=${kt.NavHeader}>Vira</h1>
            </${_o}>
        `}});
